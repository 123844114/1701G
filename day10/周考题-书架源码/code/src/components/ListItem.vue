<template>
    <div class="list-item">
        <!-- {{itemData}} -->
        <img :src="options.avatar" alt="">
        <div class="mid">
            <h3>{{options.title}}</h3>
            <p><span>寨主</span>|<span>玄幻</span></p>
            <p class='clap'>{{options.summary}}</p>
            <p><a href="http://">最新更新</a> <span>2018-09-17 19:50</span></p>
        </div>
        <div class="right">
            <span>{{options.score}}月票</span>
            <p>
                <button class="btn btn-detail" @click="$router.push('/detail/'+options.id)">书籍详情</button>
                <!-- <button class="btn btn-my" @click="addToMe" :class={disable:disable}>加入书架</button> -->
                <AddToMe :opt="options"/>
            </p>
        </div>
    </div>
</template>

<script>
import AddToMe from '@/components/AddToMe'
export default {
props:['options'],
components:{AddToMe}
}
</script>

<style scoped lang='scss'>
.list-item{
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom:1px solid red;
    img{
        width:100px;
        height:100px;
        flex: 1
    }
    .mid{
        flex: 5;
        margin-left: 10px;
        color: #636161;
        .clap{
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;      /* 可以显示的行数，超出部分用...表示*/
            -webkit-box-orient: vertical;
        }
    }
    .right{
        flex: 2;
        position: relative;
        span{
            position: absolute;
            top: 5px;
        }
        p{
            position: absolute;
            bottom: 0;
            .btn{
                height: 24px;
                line-height: 24px;
                color: #fff;
                border: 0;
                width: 60px;
                font-size: 12px;
                cursor: pointer;
                outline: none;
            }
            .btn-detail{
                background: red;
            }
            .btn-my{
                border: 1px solid blue;
                color:blue
            }
            .disable{
               border: 1px solid #666;
                color:#666 
            }
        }
    }
}
</style>
