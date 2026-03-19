#!/bin/bash
# ============================================================
# HelpFlux VPS Setup Script
# Hostgator VPS (Ubuntu 22.04+)
# Prepara o servidor para hospedar múltiplos sites estáticos
# ============================================================

set -e

echo "==> Atualizando sistema..."
apt update && apt upgrade -y

# ---- Ferramentas básicas ----
echo "==> Instalando ferramentas básicas..."
apt install -y curl git unzip ufw fail2ban

# ---- Node.js 20 LTS (para builds) ----
echo "==> Instalando Node.js 20 LTS..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
echo "Node $(node -v) | npm $(npm -v)"

# ---- Nginx ----
echo "==> Instalando Nginx..."
apt install -y nginx
systemctl enable nginx
systemctl start nginx

# ---- Certbot (SSL gratuito Let's Encrypt) ----
echo "==> Instalando Certbot..."
apt install -y certbot python3-certbot-nginx

# ---- Firewall ----
echo "==> Configurando firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
ufw status

# ---- Usuário de deploy ----
echo "==> Criando usuário de deploy..."
if ! id "deploy" &>/dev/null; then
    adduser --disabled-password --gecos "" deploy
    usermod -aG www-data deploy
    mkdir -p /home/deploy/.ssh
    cp /root/.ssh/authorized_keys /home/deploy/.ssh/ 2>/dev/null || true
    chown -R deploy:deploy /home/deploy/.ssh
    chmod 700 /home/deploy/.ssh
    chmod 600 /home/deploy/.ssh/authorized_keys 2>/dev/null || true
    echo "deploy ALL=(ALL) NOPASSWD: /usr/bin/systemctl reload nginx" >> /etc/sudoers.d/deploy
fi

# ---- Estrutura de diretórios (multi-site) ----
echo "==> Criando estrutura de sites..."
mkdir -p /var/www/helpflux.com.br/public
mkdir -p /var/www/_shared/logs
chown -R deploy:www-data /var/www
chmod -R 775 /var/www

# ---- Nginx: config global otimizada ----
echo "==> Configurando Nginx global..."
cat > /etc/nginx/conf.d/optimization.conf << 'NGINX'
# Gzip
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;

# Security headers (aplicado a todos os sites)
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;

# File cache
open_file_cache max=1000 inactive=20s;
open_file_cache_valid 30s;
open_file_cache_min_uses 2;
NGINX

# ---- Fail2ban config ----
echo "==> Configurando Fail2ban..."
cat > /etc/fail2ban/jail.local << 'F2B'
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5

[sshd]
enabled = true

[nginx-http-auth]
enabled = true

[nginx-botsearch]
enabled = true
F2B
systemctl enable fail2ban
systemctl restart fail2ban

echo ""
echo "============================================"
echo "  VPS pronto!"
echo "  Node: $(node -v)"
echo "  Nginx: $(nginx -v 2>&1)"
echo "  Certbot: $(certbot --version 2>&1)"
echo "  Firewall: ativo (SSH + Nginx)"
echo "  Fail2ban: ativo"
echo "  Usuário deploy: criado"
echo "  Diretório: /var/www/helpflux.com.br/public"
echo "============================================"
echo ""
echo "Próximos passos:"
echo "  1. Configure o DNS do domínio apontando para o IP deste VPS"
echo "  2. Copie o nginx config: cp infra/nginx/helpflux.com.br /etc/nginx/sites-available/"
echo "  3. Ative: ln -s /etc/nginx/sites-available/helpflux.com.br /etc/nginx/sites-enabled/"
echo "  4. SSL: certbot --nginx -d helpflux.com.br -d www.helpflux.com.br"
echo "  5. Configure o GitHub Actions secret: VPS_SSH_KEY"
