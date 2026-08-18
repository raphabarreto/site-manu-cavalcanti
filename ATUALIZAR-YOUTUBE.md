# Como Atualizar os Links do YouTube no Portfólio

## Passo a passo:

1. **Abra o arquivo**: `components/PortfolioGrid.tsx`

2. **Para cada projeto**, você precisa:
   - Abrir o link do Behance (está no `videoUrl`)
   - Encontrar o vídeo do YouTube embedado no projeto
   - Copiar o link do YouTube (formato: `https://youtube.com/watch?v=XXXXXXXXXXX`)
   - Substituir o link do Behance pelo link do YouTube

3. **Exemplo de como trocar**:

**Antes:**
```typescript
videoUrl: 'https://www.behance.net/gallery/211435831/XAROLA',
```

**Depois:**
```typescript
videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ', // Link real do YouTube
```

## Lista de projetos para atualizar:

- [ ] XAROLA - https://www.behance.net/gallery/211435831/XAROLA
- [ ] Bladez - https://www.behance.net/gallery/226171231/Bladez
- [ ] Myn - https://www.behance.net/gallery/230736521/Myn
- [ ] oifrancine - https://www.behance.net/gallery/226170321/oifrancine
- [ ] Crocodilovlr - https://www.behance.net/gallery/211434349/Crocodilovlr
- [ ] Caligrafo - https://www.behance.net/gallery/230733483/Caligrafo
- [ ] TrovinBala - https://www.behance.net/gallery/230735679/TrovinBala
- [ ] eaX Presidas - https://www.behance.net/gallery/224258087/eaX-Presidas
- [ ] Miw_ - https://www.behance.net/gallery/219238651/Miw_
- [ ] Viqsmvlr - https://www.behance.net/gallery/230734595/Viqsmvlr

## Dica:

No Behance, o vídeo do YouTube geralmente aparece assim:
- Role a página do projeto até encontrar o player do YouTube
- Clique com botão direito no vídeo → "Copiar URL do vídeo"
- Ou clique no vídeo para abrir no YouTube e copie da barra de endereço
