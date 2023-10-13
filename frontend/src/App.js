import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });

  // Use Effece
  useEffect(() => {
    fetchNotes();
  }, []);

  // Functions
  const fetchNotes = async () => {
    // Fetch the notes
    const res = axios.get("http://localhost:3000/notes");
    //Set the state
    console.log(res);
    setNotes((await res).data.notes);
    console.log(res);
  };

  return (
    <div className="App">
      <div>
        <h2>Notes</h2>
        {notes &&
          notes.map((note) => {
            return (
              <div key={note._id}>
                <h3>{note.title}</h3>
              </div>
            );
          })}
      </div>

      <div className="">
        <h2>Create Note</h2>
        <form>
          <input value={createForm.title} name="title" />
          <textarea value={createForm.body} name="body"></textarea>
          <button type="submit">Create Note</button>
        </form>
      </div>
    </div>
  );
}

export default App;
