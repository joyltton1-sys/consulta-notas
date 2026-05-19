# Consulta de Notas

Este projeto permite consultar notas dos alunos a partir de um arquivo Excel hospedado no GitHub Pages.

## 🚀 Como usar

1. Faça um fork ou clone deste repositório.
2. Certifique-se de que o arquivo `Notas_1ºTÉC_INT.xlsx` está na raiz do projeto.
3. Vá até as configurações do repositório no GitHub.
4. Ative o **GitHub Pages**:
   - Em *Settings* → *Pages* → selecione a branch principal (geralmente `main`) e a pasta `/root`.
   - Salve.
5. O site ficará disponível em:  
   `https://seu-usuario.github.io/consulta-notas`

## 📖 Como funciona

- O aluno digita o **nome completo** no campo de busca.
- O sistema lê o arquivo Excel usando a biblioteca [SheetJS](https://sheetjs.com/).
- Se o nome for encontrado, exibe o **Aluno** e a **Nota Final**.
- Caso contrário, mostra a mensagem "Aluno não encontrado".

## 🛠️ Tecnologias

- HTML
- JavaScript
- [SheetJS](https://cdnjs.com/libraries/xlsx)

---
