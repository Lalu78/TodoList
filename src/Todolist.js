import React, { useState } from "react";
import "./Todolist.css";

function Todolist() {
  const [input, setInput] = useState("");
    const [showinput, showsetInput] = useState([]);
    const [togglesubmint, setTogglesubmit] = useState(true)
    const [isedititem,setIsedititem]=useState(null)
 
 
  const onPost = () => {
      if (!input) {
          alert("please fill data");
      } else if (input && !togglesubmint) { 
          showsetInput(
            showinput.map((ele) => {
                  if (ele.id===isedititem) {
                    return {...ele,name:input}
                  }
                  return ele;
            })
          )
        setTogglesubmit(true)
        setInput('')
        setIsedititem(null)
          

          
      }
      else {
      const allInputData={id: new Date().getTime().toString(),name:input}
      showsetInput([...showinput, allInputData]);
      setInput("");
      
    
    }
    };
    
    const onEdite = (id) => {
        let newEditItem = showinput.find((elem) => {
            return elem.id === id
        });
       
        setTogglesubmit(false)
        setInput(newEditItem.name)
        setIsedititem(id)

    }

  const ondelete = (index) => {
      const del = showinput.filter((elem) => {
      return elem.id !== index;
    });
    showsetInput(del);
  };
  const Onremove = () => {
    showsetInput([]);
  };

  return (
    <div class="Parent">
      <div class="Child">
        <div Min_child>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGcyylVER17tX7y4e78YbpFPa9_raMAGm_Q&usqp=CAU"
              alt=""
            />
            <figcaption className="title"> Add your itmes</figcaption>
          </figure>
        </div>
        <div className="inputItem">
          <input
            type="text"
            placeholder="✍write your text here.."
                      
            value={input}
            onChange={(e) => {
              const d = e.target.value;
              setInput(d);
            }}
            />
                  {
                      togglesubmint ? <i className="fa fa-plus-square btn_add"  title="add-item"  onClick={onPost} ></i> :
                      <i className="fa fa-edit btn_add" title="edit-item" onClick={onPost}></i>
                          
                  }
                  
                 
        </div>

        {showinput.map((ele) => {
          return (
            <div className="ShowItem" key={ele.id}>
              <p>
                 {ele.name}
              </p>
                 <div>
                      <i class="fa fa-trash" title=" delete-item" onClick={() => {
                  ondelete(ele.id);
                }}
                >
              
              </i>
                  
              <i className="fa fa-edit " title="edit-item"
              
                onClick={() => {
                  onEdite(ele.id);
                }}
              >
            </i>
                 </div>
            </div>
          );
        })}

        <button
          onClick={() => {
            Onremove();
          }}
        >
          Remove all
        </button>
      </div>
    </div>
  );
}

export default Todolist;
