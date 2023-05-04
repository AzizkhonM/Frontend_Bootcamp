<template>
  <section class="bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <button data-text="Awesome" class="button2">
          <span class="actual-text">&nbsp;todomaster&nbsp;</span>
          <span class="hover-text" aria-hidden="true">&nbsp;todomaster&nbsp;</span>
        </button>
      </a>
      <div class="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="auth">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com" required="" v-model="email" />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" v-model="password" />
            </div>
            <div class="flex items-center justify-between"></div>
            <!-- <button
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button> -->
            <div class="flex justify-center items-center">
              <button type="submit" class="button"> Button
              </button>
            </div>
            <p class="text-sm font-light text-gray-400">
              Don’t have an account yet?
              <a href="#" class="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from "../../services/auth";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    isAuth() {
      return this.$store.state.authstore.loading;
    },
  },

  methods: {
    auth() {
      const newUser = {
        email: this.email,
        password: this.password,
      };

      if (
        newUser.email.trim().length === 0 ||
        newUser.password.trim().length === 0
      ) {
      } else {
        auth
          .login(newUser)
          .then((res) => {
            localStorage.setItem("token", res?.data?.tokens?.access_token);
            localStorage.setItem("username", res?.data?.first_name);
            this.$router.push({ name: "home" });
            this.$store.commit('SET_USERNAME', res?.data?.first_name)
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() { },
};
</script>
<style>
.button {
  --color: rgb(37 99 235);
  width: 90%;
  padding: 0.8em 1.7em;
  background-color: transparent;
  border-radius: .5em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: .5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  text-transform: uppercase;
  color: var(--color);
  z-index: 1;
}

.button::before,
.button::after {
  content: '';
  display: block;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: var(--color);
  transition: 1s ease;
}

.button::before {
  top: -1em;
  left: -1em;
}

.button::after {
  left: calc(100% + 1em);
  top: calc(100% + 1em);
}

.button:hover::before,
.button:hover::after {
  height: 410px;
  width: 410px;
}

.button:hover {
  color: white;
  border: 1px solid rgb(31 41 55);
}

.button:active {
  filter: brightness(.8);
}





/* === removing default button style ===*/
.button2 {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
}

/* button styling */
.button2 {
  --border-right: 6px;
  --text-stroke-color: rgba(255,255,255,0.6);
  --animation-color: rgb(59 130 246);
  --fs-size: 1.75em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.button2:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}
</style>