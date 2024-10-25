import Input from "./Input";

export default function NewProject(){
  return(
    <div>
      <menu>
        <li><button>Cancal</button></li>
        <li><button>Save</button></li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Discription" textarea />
        <Input label="Due Date" />
      </div>
   </div>
  );
}