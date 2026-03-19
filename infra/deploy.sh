#!/bin/bash
# ============================================================
# Deploy script - roda no VPS via GitHub Actions
# Recebe o build estático e publica no Nginx
# ============================================================

set -e

SITE_DIR="/var/www/helpflux.com.br/public"
BACKUP_DIR="/var/www/helpflux.com.br/backup"
DEPLOY_ARTIFACT="$1"

if [ -z "$DEPLOY_ARTIFACT" ]; then
    echo "Uso: ./deploy.sh <caminho-do-arquivo.tar.gz>"
    exit 1
fi

echo "==> Iniciando deploy helpflux.com.br"
echo "    Artifact: $DEPLOY_ARTIFACT"
echo "    Destino:  $SITE_DIR"

# Backup do site atual
echo "==> Backup do site atual..."
rm -rf "$BACKUP_DIR"
if [ -d "$SITE_DIR" ] && [ "$(ls -A $SITE_DIR 2>/dev/null)" ]; then
    cp -r "$SITE_DIR" "$BACKUP_DIR"
fi

# Limpar e extrair novo build
echo "==> Publicando novo build..."
rm -rf "${SITE_DIR:?}"/*
tar -xzf "$DEPLOY_ARTIFACT" -C "$SITE_DIR"

# Permissões
chown -R deploy:www-data "$SITE_DIR"
chmod -R 755 "$SITE_DIR"

# Verificar que index.html existe
if [ ! -f "$SITE_DIR/index.html" ]; then
    echo "ERRO: index.html não encontrado! Fazendo rollback..."
    rm -rf "${SITE_DIR:?}"/*
    if [ -d "$BACKUP_DIR" ]; then
        cp -r "$BACKUP_DIR"/* "$SITE_DIR"/
    fi
    exit 1
fi

# Reload nginx (sem downtime)
sudo systemctl reload nginx

echo "==> Deploy concluído com sucesso!"
echo "    Arquivos: $(find $SITE_DIR -type f | wc -l)"
echo "    Tamanho: $(du -sh $SITE_DIR | cut -f1)"
