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
  const countyInfo = ["Mombasa", "Kwale", "Kilifi", "Nairobi City"].sort().map((county) => <option key={county} value={county}>{county}</option>)

  function handleSignup(e) {
    e.preventDefault();
    Swal.fire({
      title: "Creating Account",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    })
    

    const newUsers = new FormData();
    const formDataFields = [
        'full_name',
        'username',
        'phone_number',
        'email',
        'password'  
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

   
    submitData(newUsers);
    e.target.reset();
  }

  function submitData(data) {
    fetch("http://localhost:5000/users", {
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
              src="https://media.istockphoto.com/id/488027905/photo/were-rich-no-more-cattle-rustling-for-us.jpg?s=612x612&w=0&k=20&c=DDkrjFOpPBqz1klR7jL6_4Fp5Xb0-B0cCSaW8Ez0J5I="
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
              className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
              <div className='space-y-2'>
                    <div>
                      <label className='block'>Full Name:</label>
                      <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' name="full_name" placeholder="Full Name" type="text" required/>
                    </div>
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
                      <label className='block'>Username:</label>
                      <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' name="username"  placeholder="Username" type="text" required/>
                    </div>

                    <div>
                      <label className='block'>Password:</label>
                      <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' name="password"  placeholder="Password" type="password" required/>
                    </div>
              </div>        
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

