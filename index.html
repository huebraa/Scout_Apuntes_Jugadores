from zipfile import ZipFile
from pathlib import Path

# Crear los contenidos de los archivos
index_html = """
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Apuntes de Jugadores</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>📆 Información del Partido</h1>
    <input type="text" id="date" placeholder="Fecha" />
    <input type="text" id="location" placeholder="Lugar" />
    <input type="text" id="teamA" placeholder="Equipo A" />
    <input type="text" id="teamB" placeholder="Equipo B" />

    <h2>🔍 Jugadores Destacados</h2>
    <div id="players"></div>
    <button onclick="addPlayer()">➕ Añadir Jugador</button>

    <h2>📐 Formación Táctica (4-2-3-1)</h2>
    <div class="formations">
      <div>
        <h3 id="teamAName">Equipo A</h3>
        <div id="formationA"></div>
      </div>
      <div>
        <h3 id="teamBName">Equipo B</h3>
        <div id="formationB"></div>
      </div>
    </div>

    <h2>🧠 Análisis General</h2>
    <input type="text" id="bestPlayer" placeholder="Mejor jugador" />
    <input type="text" id="revelation" placeholder="Jugador revelación" />
    <textarea id="tactics" placeholder="Aspectos tácticos interesantes"></textarea>
  </div>
  <script src="script.js"></script>
</body>
</html>
"""

style_css = """
body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
}

input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 15px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.formations {
  display: flex;
  gap: 20px;
}

textarea {
  height: 100px;
}
"""

script_js = """
const positions = ["GK", "LB", "CB1", "CB2", "RB", "CDM1", "CDM2", "CAM", "LW", "RW", "ST"];

function createFormationInputs(containerId) {
  const container = document.getElementById(containerId);
  positions.forEach(pos => {
    const input = document.createElement("input");
    input.placeholder = pos;
    container.appendChild(input);
  });
}

function addPlayer() {
  const div = document.createElement("div");
  div.innerHTML = \`
    <input placeholder="Nombre" />
    <input placeholder="Posición" />
    <textarea placeholder="Acciones clave"></textarea>
    <input placeholder="Nota (1–10)" />
    <textarea placeholder="Comentarios"></textarea>
    <hr />
  \`;
  document.getElementById("players").appendChild(div);
}

createFormationInputs("formationA");
createFormationInputs("formationB");
"""

# Guardar los archivos en una carpeta temporal
zip_path = "/mnt/data/Scout_Apuntes_HTML.zip"
with ZipFile(zip_path, "w") as zipf:
    zipf.writestr("index.html", index_html.strip())
    zipf.writestr("style.css", style_css.strip())
    zipf.writestr("script.js", script_js.strip())

zip_path
