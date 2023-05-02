<script>
    export default{
        
    }
</script>


<template>
    <header>
        <div class="container">
            <nav>
                <a href="" class="logo"><img src="../assets/Logo.png" alt=""></a>
                <ul class="nav_list">
                    <li>Home</li>
                    <li>Service</li>
                    <li>Feature</li>
                    <li>Product</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                </ul>
                <ul class="nav_list">
                    <li><button class="btn_login">Login</button></li>
                    <li><button class="btn_signup">Signup</button></li>
                </ul>
            </nav>
        </div>
    </header>
</template>


<style>

    ul{
        list-style-type: none;
    }

    img{
        width: 120px;
    }

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 85px;
        width: 100%;
        background-color:cyan;
    }

    .nav_list{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav_list:nth-child(1){
        width: 50%;
    }

    .nav_list:nth-child(2){
        width: 50%;
    }

    header{
        width: 100%;
        position: sticky;
        top: 0;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }   

</style>