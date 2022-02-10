import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userSlice';

const style = {
    form: {
        container:  {
            padding: "20px",
            border: "1px solid #F0F8FF",
            borderRadius: "15px",
            width: "max-content",
            marginBottom: "40px"
        },
        inputs : {
            marginBottom: "5px",
            display: "block"
        },
        submitBtn: {
            marginTop: "10px",
            padding: "10px 15px",
            border: "none",
            backgroundColor: "lightseagreen",
            fontSize: "14px",
            borderRadius: "5px",
            color: "#fff"
          }
    }
}


function PhoneBookForm() {

    // Create an object with keys as a state
    const initialFormState = {
        firstname: '',
        lastname: '',
        phoneNumber: '',
    }
    const [userData, setUserData ] = useState(initialFormState);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
            e.preventDefault();
            console.log(userData)
            dispatch(addUser(userData))
            setUserData(initialFormState)
        
        }

    const handleInputChange = (e) => {
        const { name, value} = e.target; //  <input....name="..." type="text" value="..." onChange={handleInputChange}/>
        
       /*. In functional components you need to spread the oldData and then change what you like. */
       setUserData({ ...userData, [name] : value }) // Ex: same as setUserFirstName(e.target.firstname) in the firstname input
    }


  return (
    
    <form onSubmit={submitHandler} style={style.form.container}>

        <label>User Information</label>
        <input 
            style={style.form.inputs}
            placeholder="First Name"
            name="firstname"
            type="text"
            value={userData.firstname}
            onChange={handleInputChange} // Ex:  onChange={ () => setUserFirstName(e.target.firstname)} 
        />
        <input 
        style={style.form.inputs}
        placeholder="Last Name"
            name="lastname"
            type="text"
            value={userData.lastname}
            onChange={handleInputChange}
        />
        <input 
        style={style.form.inputs}
        placeholder="Phone Number"
            name="phoneNumber"
            type="text"
            value={userData.phoneNumber}
            onChange={handleInputChange}
        />
        <button type="submit" style={style.form.submitBtn}>Add User</button>
    </form>
  )
}

export default PhoneBookForm