import React , { useState, useEffect }from 'react'

const Form = (props) => {
    const initialFormState = { id: null, name: "", email: ""  ,DOB: "" , Address: "",  NIC: "",  Gender: "" };
    const [user, setUser] = useState((props.editing?(props.currentUser):(initialFormState)));
    // const [edit, setEdit] = useState(props.currentUser);

    const handleInputChangeAdd = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
      const handleInputChangeEdit = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
   
      useEffect(
        () => {
         
          if(props.editing){
          setUser(props.currentUser);
          }
          },
        
        [props]
      );
        
      const seteditfalse=()=>{
        props.setEditing(false)
        
      }
    


  return (
    <form action="#" method="POST"  onSubmit={event => {
      
        if(props.editing){
          event.preventDefault();

            setUser(initialFormState);
            props.updateUser(user.id, user);
        }else{
          event.preventDefault();
          // if (!user.name || !user.username) return;
          props.addUser(user);
          setUser(initialFormState);      
}}}>
    <div className="shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
                      <label
                        HtmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>

                    
                          <input
                          placeholder={"Task Name"}
                          required
                          label={"Name"}
                          type="text"
                          name="name"
                          id="first_name"
                          autocomplete="given-name"
                          className="mt-1 mr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  
                          value={user.name}
          onChange={
            (props.editing?(handleInputChangeEdit):
            (
              handleInputChangeAdd
            )
            
            
            )
            
            }
                        />
                      
                    
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        HtmlFor="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                    

                      <input
                       
                       type="email"
                       name="email"
                       required
                       
                       id="email_address"
                       autocomplete="email"
                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                       value={user.email}
                       onChange={
                        (props.editing?(handleInputChangeEdit):
                        (
                          handleInputChangeAdd
                        )
                        
                        
                        )
                        
                        }
                       />
                  
                    </div>

          <div className="col-span-6 sm:col-span-3">
                      <label
                        HtmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        DOB
                      </label>
                     

                      <input
                        // type="date"
                        type="text"
                        required
                        
                        id="birthday"
                        name="DOB"
                        autocomplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={user.DOB}
                        onChange={
                          (props.editing?(handleInputChangeEdit):
                          (
                            handleInputChangeAdd
                          )
                          
                          
                          )
                          
                          }
                        />

                     
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        HtmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>

                     
                      
                      <input
                        // type="date"
                        type="text"
                        required
                        
                        id="birthday"
                        name="Gender"
                        autocomplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={user.Gender}
                        onChange={
                          (props.editing?(handleInputChangeEdit):
                          (
                            handleInputChangeAdd
                          )
                          
                          
                          )
                          
                          }
                        />
                    
                    
                    </div>

                    <div className="col-span-6">
                      <label
                        HtmlFor="street_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                  

                      <input
                      value={user.Address}
                      onChange={
                        (props.editing?(handleInputChangeEdit):
                        (
                          handleInputChangeAdd
                        )
                        
                        
                        )
                        
                        }
                        type="text"
                        required

                        name="Address"
                        id="street_address"
                        autocomplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                   
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        HtmlFor="nic"
                        className="block text-sm font-medium text-gray-700"
                      >
                        NIC
                      </label>
                     
                     
                      <input
                       value={user.NIC}
                       onChange={
                        (props.editing?(handleInputChangeEdit):
                        (
                          handleInputChangeAdd
                        )
                        
                        
                        )
                        
                        }
                        type="text"
                        name="NIC"
                        required

                        id="first_name"
                        autocomplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                  
                    </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        {!props.editing?(
         <button type="submit" className="inline-flex justify-center mr-10 py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
         Save
       </button>
        ):(
         
<div>
<button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Update User
</button>
<span>&nbsp;</span>
<button type="submit"  

onClick={
  ()=>{
    
  seteditfalse();
setUser(initialFormState)  
}
 } 
 
 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Cancel
</button>
</div>  
        )}
      


       
      </div>
    </div>
  </form>
  )
}

export default Form