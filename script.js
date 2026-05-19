let dados = [];

// Carregar Excel
fetch('Notas_1ºTÉC_INT.xlsx')
  .then(res => res.arrayBuffer())
  .then(ab => {
    const wb = XLSX.read(ab, {type: "array"});
    const ws = wb.Sheets[wb.SheetNames[0]];
    dados = XLSX.utils.sheet_to_json(ws);
  });

function buscarNota() {
  const nome = document.getElementById("nomeAluno").value.trim().toUpperCase();
  const aluno = dados.find(a => a.Aluno.toUpperCase() === nome);
  if (aluno) {
    document.getElementById("resultado").innerText =
      `Aluno: ${aluno.Aluno} | Nota Final: ${aluno["Nota Final"]}`;
  } else {
    document.getElementById("resultado").innerText = "Aluno não encontrado.";
  }
}
