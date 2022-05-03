import React, {useState} from 'react';


const CreatePosts = (props) => {
    
    const [firstName, setFirstName] = useState('');
    const [post, setPost] = useState('');
    
    function handleSubmit(formEvent){
        formEvent.preventDefault();
        alert(`First Name: ${firstName} Post: ${post}`);

        console.log(props);
    }
    
    return (       
    
    <div>
        <form onsubmit ={handleSubmit}>
          <label for='first_name'>First Name: </label>
          <input type='text' onChange={(event) => setFirstName(event.target.value)} value={firstName} />
          <label for='post'>Post: </label>
          <input type='text' onChange={(event) => setPost(event.target.value)} value={post} />
          <button>Create</button>
        </form>
      </div>

    );
}
 
export default CreatePosts;