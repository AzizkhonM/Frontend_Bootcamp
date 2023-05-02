<script>
    import { AUTH } from "../../service/auth/auth"

    export default {
        name: "Login",
        data(){

            return {
                email: "",
                password: ""
            }

        },
        methods: {
            
            useAuth(){
                const user = {
                    username: this.email,
                    password: this.password
                }

                if(user.username.trim().length === 0 || user.password.trim().length === 0){
                    alert("Iltimos bo'sh maydonlarni to'ldiring")
                } else{
                    AUTH.LOGIN(user).then((res) => {
                        console.log(res.data)
                        localStorage.setItem("token", res?.data?.token)
                        this.$router.push("/")
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            }

        },

        mounted(){

            console.log(AUTH);

        } 
    }
</script>


<template lang="">
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
          Admin Dashboard 
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Xush kelibsiz
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="useAuth">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Elektron pochta</label>
                      <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nom@company.com" required="" v-model="email">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parol</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" v-model="password">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Eslab qol</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Parolni unutdingizmi?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Kirish</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Akkauntingiz yo'qmi? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Ro'yxatdan o'ting</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section> 
    </div>
</template>


<style lang="scss">

    input{
        caret-color: rgb(37 99 235);;
    }

    input:focus{
        outline: none;
    }
    
</style>