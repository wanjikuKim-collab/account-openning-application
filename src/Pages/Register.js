import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Select, Stepper, initTE } from "tw-elements";
import Swal from "sweetalert2";

function Register() {
  // useNavigate
  const navigate = useNavigate();

  // Initialising TE
  initTE({ Select, Stepper });
  const countyInfo = ["Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita/Taveta", "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo", "Meru", "Tharaka-Nithi", "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", "Nyeri", "Kirinyaga", "Murang'a", "Kiambu", "Turkana", "West Pokot", "Samburu", "Trans Nzoia", "Uasin Gishu", "Elgeyo/Marakwet", "Nandi", "Baringo", "Laikipia", "Nakuru", "Narok", "Kajiado", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma", "Busia", "Siaya", "Kisumu", "Homa Bay", "Migori", "Kisii", "Nyamira", "Nairobi City"].sort().map((county) => <option key={county} value={county}>{county}</option>)

  function handleSignup(e) {
    e.preventDefault();
    Swal.fire({
      title: "Creating Account",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    })
    

    const newUsers = new FormData();
    const formDataFields = [
        'first_name',
        'last_name',
        'username',
        'phone_number',
        'email',
        'date_of_birth',
        'gender',
        'password',
        'location',
        'avatar_img'
    ];

    formDataFields.forEach((field) => {
      if (field === 'avatar_img') {
        const file = e.target.avatar_img.files[0];
        if (file) {
          newUsers.append('applicant[avatar_img]', file);
        }
      } else {
        newUsers.append(`applicant[${field}]`, e.target[field].value);
      }
    });

    // for (const pair of newUsers.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }
    submitData(newUsers);
    e.target.reset();
  }

  function submitData(data) {
    fetch("/applicants", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
      // Successful Signup
      Swal.fire({
        icon: "success",
        title: `Account Created!`,
        text: "Please log in to your new account.",
        confirmButtonText: "Continue to Login",
        confirmButtonColor: "#05C7F8"
      }).then(() => {
        navigate("/login");
      })
    });
  }

  return (
    <section className="signup">
      <div className="flex flew-row space-x-8 py-12 px-32">
        <div className="left-side w-1/2">
          <img
              src="https://images.unsplash.com/photo-1670272506220-f8332b178148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Three people sitting outside in a discussion"
              className="rounded-3xl h-full object-cover"
              loading='lazy'
          />
        </div>

        <div className="right-side space-y-10 w-1/2">
          <div className='bg-blue-dark text-white rounded-3xl p-10'>
            <div className='text-left mb-6 space-y-1.5'>
              <h1 className='font-extrabold text-5xl'>Sign Up</h1>
              <p className='font-medium text-lg'>Start your banking journey here!</p>
            </div>

            <form onSubmit={handleSignup} className='text-left'>
            <ul
              data-te-stepper-init
              className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
              {/* <!--First item--> */}
              <li
                data-te-stepper-step-ref
                data-te-stepper-step-active
                className="w-[4.5rem] flex-auto">
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                  <span
                    data-te-stepper-head-icon-ref
                    className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                    1
                  </span>
                  <span
                    data-te-stepper-head-text-ref
                    className="font-medium text-neutral-200 after:flex after:text-[0.8rem] after:content-[data-content]">
                    Personal
                  </span>
                </div>
                {/* Personal Details Step */}
                <div
                  data-te-stepper-content-ref
                  className="absolute w-full p-4 transition-all duration-500 ease-in-out">
                  <p className="font-bold uppercase mb-3 text-lg">Personal Details</p>
                  <div className='space-y-2 mb-4'>
                    <div className="space-x-4 flex items-center">
                      <div>
                        <label className='block'>First Name:</label>
                        <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' name="first_name" placeholder="First Name" type="text" required/>
                      </div>

                      <div>
                        <label className='block'>Last Name:</label>
                        <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' name="last_name"  placeholder="Last Name" type="text" required/>
                      </div>
                    </div>
                    
                    <div>
                      <label className='block'>Date of Birth:</label>
                      <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' name="date_of_birth"  placeholder="Date of Birth" type="date" required/>
                    </div>

                    <div>
                      <label>Gender:</label>
                      <div className="block rounded border-0 bg-white w-full h-9 text-blue-dark">
                        <select name="gender" data-te-select-init data-te-select-placeholder="Select Gender" >
                          <option value="" hidden selected></option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!--Second item--> */}
              <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                  <span
                    data-te-stepper-head-icon-ref
                    className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                    2
                  </span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-neutral-200 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                    Contact
                  </span>
                </div>
                {/* Contact Details Step */}
                <div
                  data-te-stepper-content-ref
                  className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
                  <p className="font-bold uppercase mb-3 text-lg">Contact Information</p>
                  <div className='space-y-2 mb-4'>                 
                    <div>
                      <label className='block'>Phone number:</label>
                      <PhoneInput
                        country={"ke"}
                        autoFormat={false}
                        className="block rounded border-0 bg-white w-full h-10 text-blue-dark"
                        inputClass={"phone_number"}
                        inputProps={{ name: 'phone_number', type: "tel" }}
                        enableSearch="true"
                        inputStyle={{
                          border: "0px",
                          height: "100%",
                          width: "100%"
                        }}
                      />
                    </div>

                    <div>
                      <label className='block'>Email Address:</label>
                      <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' name="email"  placeholder="Email Address" type="email" required/>
                    </div>

                    <div>
                      <label>County:</label>
                      <div className="block rounded border-0 bg-white w-full h-9 text-blue-dark">
                        <select name="location" data-te-select-init data-te-select-filter="true" data-te-select-placeholder="Select County">
                          <option value="" hidden selected></option>
                          {countyInfo}
                        </select>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </li>

              {/* <!--Third item--> */}
              <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
                <div
                  data-te-stepper-head-ref
                  className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                  <span
                    data-te-stepper-head-icon-ref
                    className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                    3
                  </span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-neutral-200 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                    Account
                  </span>
                </div>
                {/* Account Details Step */}
                <div
                  data-te-stepper-content-ref
                  className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
                  <p className="font-bold uppercase mb-3 text-lg">Account Details</p>
                  <div className='space-y-2 mb-4'>
                    <div>
                      <label className='block'>Username:</label>
                      <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' name="username"  placeholder="Username" type="text" required/>
                    </div>

                    <div>
                      <label className='block'>Password:</label>
                      <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' name="password"  placeholder="Password" type="password" required/>
                    </div>

                    <div>
                      <label className='block'>Profile Picture:</label>
                      <input className='relative m-0 block w-full min-w-0 flex-auto rounded bg-white bg-clip-padding px-3 py-[0.32rem] text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none text-blue-dark' name="avatar_img"  placeholder="Enter URL Here" type="file" accept="image"/>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

              <div className='w-full text-center flex items-center'>
                <button className='w-full bg-orange-dark rounded p-2 mt-6 text-white lg:text-xl font-bold bottom-0 hover:bg-blue-light' type="submit">Register</button>
              </div>

              <p className='text-center mt-4'>Already have an account? <a className='underline hover:text-orange-dark' href="/login">Login</a></p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
export default Register;

