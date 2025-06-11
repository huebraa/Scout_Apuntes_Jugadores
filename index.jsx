import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const defaultFormation = {
  GK: "", LB: "", CB1: "", CB2: "", RB: "",
  CDM1: "", CDM2: "", CAM: "", LW: "", RW: "", ST: ""
};

export default function MatchNotes() {
  const [matchInfo, setMatchInfo] = useState({ date: "", location: "", teamA: "", teamB: "" });
  const [players, setPlayers] = useState([{ name: "", position: "", actions: "", rating: "", comments: "" }]);
  const [analysis, setAnalysis] = useState({ bestPlayer: "", revelation: "", tactics: "" });
  const [formationA, setFormationA] = useState({ ...defaultFormation });
  const [formationB, setFormationB] = useState({ ...defaultFormation });

  const handlePlayerChange = (index, field, value) => {
    const updated = [...players];
    updated[index][field] = value;
    setPlayers(updated);
  };

  const handleFormationChange = (team, position, value) => {
    const updater = team === "A" ? setFormationA : setFormationB;
    updater(prev => ({ ...prev, [position]: value }));
  };

  const addPlayer = () => {
    setPlayers([...players, { name: "", position: "", actions: "", rating: "", comments: "" }]);
  };

  const renderFormation = (formation, team) => (
    <div className="bg-green-700 text-white rounded-xl p-4 space-y-2">
      <h3 className="text-lg font-semibold">
        Formación {team === "A" ? matchInfo.teamA || "Equipo A" : matchInfo.teamB || "Equipo B"} (4-2-3-1)
      </h3>
      <div className="grid grid-cols-1"><Input placeholder="ST" value={formation.ST} onChange={e => handleFormationChange(team, "ST", e.target.value)} /></div>
      <div className="grid grid-cols-3 gap-2">
        <Input placeholder="LW" value={formation.LW} onChange={e => handleFormationChange(team, "LW", e.target.value)} />
        <Input placeholder="CAM" value={formation.CAM} onChange={e => handleFormationChange(team, "CAM", e.target.value)} />
        <Input placeholder="RW" value={formation.RW} onChange={e => handleFormationChange(team, "RW", e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input placeholder="CDM1" value={formation.CDM1} onChange={e => handleFormationChange(team, "CDM1", e.target.value)} />
        <Input placeholder="CDM2" value={formation.CDM2} onChange={e => handleFormationChange(team, "CDM2", e.target.value)} />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Input placeholder="LB" value={formation.LB} onChange={e => handleFormationChange(team, "LB", e.target.value)} />
        <Input placeholder="CB1" value={formation.CB1} onChange={e => handleFormationChange(team, "CB1", e.target.value)} />
        <Input placeholder="CB2" value={formation.CB2} onChange={e => handleFormationChange(team, "CB2", e.target.value)} />
        <Input placeholder="RB" value={formation.RB} onChange={e => handleFormationChange(team, "RB", e.target.value)} />
      </div>
      <div><Input placeholder="GK" value={formation.GK} onChange={e => handleFormationChange(team, "GK", e.target.value)} /></div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      <Card>
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">📆 Información del partido</h2>
          <Input placeholder="Fecha" value={matchInfo.date} onChange={e => setMatchInfo({ ...matchInfo, date: e.target.value })} />
          <Input placeholder="Lugar" value={matchInfo.location} onChange={e => setMatchInfo({ ...matchInfo, location: e.target.value })} />
          <Input placeholder="Equipo A" value={matchInfo.teamA} onChange={e => setMatchInfo({ ...matchInfo, teamA: e.target.value })} />
          <Input placeholder="Equipo B" value={matchInfo.teamB} onChange={e => setMatchInfo({ ...matchInfo, teamB: e.target.value })} />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-bold">🔍 Jugadores destacados</h2>
          {players.map((player, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2 border p-2 rounded">
              <Input placeholder="Nombre" value={player.name} onChange={e => handlePlayerChange(index, "name", e.target.value)} />
              <Input placeholder="Posición" value={player.position} onChange={e => handlePlayerChange(index, "position", e.target.value)} />
              <Textarea placeholder="Acciones clave" value={player.actions} onChange={e => handlePlayerChange(index, "actions", e.target.value)} />
              <Input placeholder="Nota (1–10)" value={player.rating} onChange={e => handlePlayerChange(index, "rating", e.target.value)} />
              <Textarea placeholder="Comentarios" value={player.comments} onChange={e => handlePlayerChange(index, "comments", e.target.value)} />
            </div>
          ))}
          <Button onClick={addPlayer}>➕ Añadir jugador</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-bold">📐 Formación táctica (4-2-3-1)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderFormation(formationA, "A")}
            {renderFormation(formationB, "B")}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">🧠 Análisis general del partido</h2>
          <Input placeholder="Mejor jugador" value={analysis.bestPlayer} onChange={e => setAnalysis({ ...analysis, bestPlayer: e.target.value })} />
          <Input placeholder="Jugador revelación" value={analysis.revelation} onChange={e => setAnalysis({ ...analysis, revelation: e.target.value })} />
          <Textarea placeholder="Aspectos tácticos interesantes" value={analysis.tactics} onChange={e => setAnalysis({ ...analysis, tactics: e.target.value })} />
        </CardContent>
      </Card>
    </div>
  );
}
