export default function PersonalDetailsSection({ register, errors }) {
     return (
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
           <label>Name*</label>
           <input {...register("name")} className="input" />
           {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
         </div>
   
         <div>
           <label>Phone Number</label>
           <input {...register("phone")} className="input" />
           {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
         </div>
   
         <div>
           <label>Email</label>
           <input disabled {...register("email")} className="input bg-gray-100 cursor-not-allowed" />
         </div>
   
         <div>
           <label>Role</label>
           <input disabled {...register("role")} className="input bg-gray-100 cursor-not-allowed" />
         </div>
       </div>
     );
   }
   