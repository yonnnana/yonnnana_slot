var app = new Vue({
  el: "#app",
  data: {
  	slot1: { value: 0, src: "" },
    slot2: { value: 0, src: "" },
    slot3: { value: 0, src: "" },
    timer: null,
    isRotate: true,
	modalShow: false
  },
  methods: {
  	stop: function() {
	  clearInterval(this.timer)
      this.timer = null
      this.isRotate = false
	  
	  var slot = this.getRandomInt(50, 0)
	  var src = ""
	  var match = false
	  if(slot.value === 4) {
		  src = "./img/4.jpg"
		  this.slot1.src = src
		  this.slot2.src = src
		  this.slot3.src = src
		  match = true
	  }
	  else if(slot.value === 7) {
		  src = "./img/1.jpg"
		  this.slot1.src = src
		  this.slot2.src = src
		  this.slot3.src = src
		  match = true
	  }
	  else if(slot.value === 3) {
		  src = "./img/3.jpg"
		  this.slot1.src = src
		  this.slot2.src = src
		  this.slot3.src = src
		  match = true
	  }
	  else if(slot.value === 9) {
		  src = "./img/2.jpg"
		  this.slot1.src = src
		  this.slot2.src = src
		  this.slot3.src = src
		  match = true
	  }
	  else if(slot.value === 47) {
		  src = "./img/ogreblack.jpg"
		  this.slot1.src = src
		  this.slot2.src = src
		  this.slot3.src = src
		  match = true
	  }
	  else if(this.slot1.value == this.slot2.value && this.slot1.value == this.slot3.value){
      	match = true
      }
	  
	  this.modalShow = match
    },
    getRandomInt: function(max, addNum) {
		var value = Math.floor(Math.random() * max) + addNum
		var src = "./img/" + value.toString() + ".jpg"
  		return { value: value, src: src }
    },
    setSlotValue: function() {
    	var slot = this.getRandomInt(6, 1)
    	this.slot1.value = slot.value
      this.slot1.src = slot.src
      
      slot = this.getRandomInt(6, 1)
      this.slot2.value = slot.value
      this.slot2.src = slot.src
      
      slot = this.getRandomInt(6, 1)
      this.slot3.value = slot.value
      this.slot3.src = slot.src
    },
    intervalSlot: function(){
    	if(this.timer == null){
      	this.timer = setInterval(this.setSlotValue, 300)
      }
    },
    start: function() {
    	this.isRotate = true
    	this.intervalSlot()
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.intervalSlot()
    })
  }
})