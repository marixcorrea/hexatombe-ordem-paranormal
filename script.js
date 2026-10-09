const $ = id => document.getElementById(id);
const ficha = $("ficha");

// mostra o valor de cada atributo ao mexer no slider
document.querySelectorAll("[data-a]").forEach(r => {
  r.addEventListener("input", () => {
    r.nextElementSibling.textContent = r.value;
    atualizar();
  });
});

function atualizar() {
  const vigor = +$("vigor").value;
  const pv = 20 + vigor * 2;
  const san = 12 + vigor * 2;

  $("pvTxt").textContent = pv + "/" + pv;
  $("sanTxt").textContent = san + "/" + san;
  $("pv").style.width = "100%";
  $("san").style.width = "100%";

  // código de identificação gerado a partir do nome
  let h = 0;
  for (const c of $("nome").value) h = (h * 31 + c.charCodeAt(0)) % 9000;
  $("codigo").textContent = "COD-" + String(1000 + h);
}

// efeito glitch ao mudar nome, classe ou afinidade
["nome", "classe", "elemento"].forEach(id => {
  $(id).addEventListener("input", () => {
    ficha.classList.remove("glitch");
    void ficha.offsetWidth;
    ficha.classList.add("glitch");
    atualizar();
  });
});

atualizar();
