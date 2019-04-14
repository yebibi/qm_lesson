<template>
  <div>
    
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0 ?'mui-active' :'']" v-for="item in cates" :key="item.id"
						@click="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
				</div>

				<ul class="photo-list">
 					 	<li v-for="item in list" :key="item.id" >
   				 			<img v-lazy="item.img_url">
								<div class="info">
									<h1 class="info-title">{{item.title}}</h1>
									<div class="info-body">{{item.zhaiyao}}</div>
								</div>
  					</li>
				</ul>
				
    </div>
	
  </div>
</template>

<script>
// import mui from '../../css/dist/js/mui.min.js'
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 
// });
export default {
  data(){
    return{
			cates:[],
			list:[]
		}
	},
	created(){
		this.getAllCategory();
		this.getPhotoListByCateId(0)
	},
  methods:{
		getAllCategory(){
			this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(result=>{
				if(result.body.status===0){
					result.body.message.unshift({title:'全部',id:0})
					this.cates = result.body.message
				}
			})
		},
		getPhotoListByCateId(cateId){
				this.$http.get('http://www.liulongbin.top:3005/api/getimages/'+cateId).then(result=>{
				if(result.body.status===0){
					this.list = result.body.message
				}
			})
		}
  }
}
</script>

<style scoped>
.photo-list{
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;
}
.photo-list li{
	background-color: #ccc;
	text-align: center;
	padding-bottom: 10px;
	box-shadow: 0 0 9px #999;
	position: relative;
}
img{
	vertical-align: middle;
}
.photo-list li img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.info{
	text-align: left;
	color:white;
	position: absolute;
	bottom: 10px;
	background-color: rgba(0,0,0,0.4);
	max-height: 84px;
}
.info-title{
	color:white;
	font-size: 14px;
}
.info-body{
	color:white;
	font-size: 13px
}
</style>
