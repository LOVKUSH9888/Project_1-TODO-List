import React, {useState} from 'react'; 

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);
  

    //Here the note is const & setNote is the function that will change the note 
    const [note, setNote] = useState({
      title: "",
      content: ""
    });
  
    function handleChange(event) {
        // console.log(event.target); 
      const { name, value } = event.target;
  
      setNote(prevNote => {
        return {
          ...prevNote, //Here ... is Spread Operator = Used for copy & pasting the previous value
          [name]: value
        };
      });
    }
  
    function submitNote(event) {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
      event.preventDefault();
    }
  
    function expand() {
      setExpanded(true);
    }
  
    return (
      <div>
        <form className="create-note">
          {isExpanded && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          )}
  
          <textarea
            name="content"
            onClick={expand}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          />
          
        </form>
      </div>
    );
  }
  
  export default CreateArea;