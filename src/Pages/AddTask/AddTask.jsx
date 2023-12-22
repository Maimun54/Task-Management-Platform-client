
import { useForm } from "react-hook-form";               
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import useAxiosPublic from "../../hook/UseAxiosPublic";


const AddTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      const userInfo = {
        title: data.title,
        email: user.email,
        date: data.date,
        priority:data.priority,
        description: data.description,
      };
      axiosPublic.post('/addTask', userInfo).then((res) => {
        if (res.data.insertedId) {
          console.log('Your Task added to the database');
          reset();
        }
      });
    };
  
    return (
      <div>
        {/* ... (rest of the code) */}
        <div>
           <div>
           <h2 className="text-center text-4xl font-bold">Add Your Task</h2>
          <div className="">
  <div className="mx-auto md:w-3/4 lg:w-2/5">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" {...register("title",{required:true})} name="title" placeholder="title" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" {...register("date",{required:true})}  placeholder="date" className="input input-bordered"  />
          {errors.date && <span className="text-red-600">Select your Date of birth</span>}
        </div>
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <select className="select select-bordered" {...register("priority",{required:true})}>
                  <option value="low">Low</option>
                  <option value="Middle">Middle</option>
                  <option value="high">High</option>
                </select>
              </div>
        <div className="form-control  mt-6">
        <label className="label">
            <span className="label-text">Message</span>
          </label>
        <textarea  type="text" {...register("description",{required:true})} name="description"  className="textarea textarea-bordered" placeholder="description"></textarea>
        {errors.description && <span className="text-red-600">This field is required</span>}
        </div>

        <div className="form-control  mt-6">
       
          <input type="submit" value="Add Task" className="btn btn-primary" />
        </div>
      </form>
     
    </div>
  </div>
</div>  
        </div> 
        </div>
      </div>
    );
  };
  
  export default AddTask;
  
