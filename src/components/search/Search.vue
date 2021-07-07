<template>
<div>
        <div class="head">
            <h2 class="animate__animated animate__fadeInDown">搜索bar</h2>
        </div>
        <div v-show="sc" class="search-box">
            <form action="#" method="POST">
              <input type="text" placeholder="hhh" v-bind:class="{searchInner:ad,searchB:av}">
            </form>
        </div>
        <div type="submit" class="buttons" @click="te"></div>
</div>
</template>

<script>
export default {
  data(){
    return {
      sc: false,
      ad: true,
      av: false
      }
  },
  methods: { //核心逻辑实现
                te: function () {
                    this.sc = !this.sc;

                    const that = this;
                    setTimeout(function () {
                        that.av = !that.av;
                    }, 100)
                },
            }
}
</script>

<style>
   * {
            padding: 0;
            margin: 0;
        }

        .head {
            width: 100%;
            height: 50px;
            background-color: #ff7f7fcf;
        }

        .head h2 {
            line-height: 50px;
            color: white;
            margin-left: 10px;
        }

        .buttons {
            position: absolute;
            top: 0;
            right: 10px;
            width: 40px;
            height: 40px;
            margin-top: 5px;
            background: url(search2.svg) no-repeat;
            background-size: 25px 25px;
            background-position: center center;
            border-radius: 50px;
            transition: all .3s ease-in;

        }

        .buttons:hover {
            background-color: #ff23004d;
            transition-property: background-color;
            transition-duration: .3s;
            transition-timing-function: ease-in;
        }

        .search-box {
            width: 80%;
            height: 50px;
            position: absolute;
            top: 0;


        }

        .searchInner {
            width: 60px;
            height: 40px;
            margin: 5px 0 0 10px;
            outline: none;
            padding: 0 15px 0 15px;
            border: 0;
            border-radius: 4px;
            background-color: #ffcbcb;
            color: #db3737bd;
            font-size: 17px;
            transition: all .3s ease-in;
        }

        input::-webkit-input-placeholder {
            color: #db3737bd;

        }

        input:-moz-placeholder {
            color: #db3737bd;

        }

        input:-ms-input-placeholder {
            color: #db3737bd;

        }

        .searchB {
            width: 90%;

        }

        .charts {
            width: 70%;
            height: 200px;
        }

        .forms {
            margin: 20px 0 0 20px;
        }
</style>