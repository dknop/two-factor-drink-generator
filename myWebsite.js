console.log('hello world');
let drinks = {ma: new Set(['tequila', 'triple sec', 'lime juice', 'sour mix']), bw:  new Set(['vodka', 'blue curacao', 'sour mix']), 
ts: new Set(['tequila', 'orange juice', 'grenandine']), 
cl: new Set(['rum', 'coke', 'lime juice']), sd: new Set(['vodka', 'orange juice']), gh: new Set(['vodka', 'grapefruit juice']),
 ghsd: new Set(['vodka', 'grapefruit juice']), cc: new Set(['vodka', 'cranberry juice']),
ob: new Set(['gin', 'orange juice']), plm: new Set(['tequila', 'grapefruit juice']), bob: new Set(['amaretto', 'orange juice']), 
soh: new Set(['southern comfort', 'cranberry juice']), fn: new Set( ['peach schnapps', 'orange juice']),
 hfn: new Set(['vodka', 'peach schnapps', 'orange juice']), rick: new Set(['gin', 'seltzer', 'lime juice']),
mad: new Set(['vodka', 'cranberry juice', 'orange juice']), sex: new Set(['vodka', 'peach schnapps', 'orange juice', 'cranberry juice']),
mbb: new Set(['rum', 'pineapple juice', 'cranberry juice']), mb: new Set(['vodka', 'melon liquor', 'orange juice']), 
slc: new Set(['vodka', 'sloe gin', 'southern comfort', 'orange juice']),
dst: new Set(['rum', 'ginger beer', 'lime juice']),mm: new Set(['vodka', 'ginger beer', 'lime juice']) }



 let ingredients = ['vodka', 'whiskey', 'tequila', 'rum', 'blue curacao']
let all_ingredients = ['vodka', 'tequila', 'rum', 'gin', 'bourbon', 'whiskey', 
                        'triple sec', 'blue curacao', 'orange liquer', 'orange juice', 'aperol',
                        'seltzer', 'tonic','sprite', 'coke','ginger ale', 'ginger beer', 'grenandine', 'sloe gin', 'pineapple juice', 
                        'southern comfort', 'lime juice', 'lemon juice', 'sour mix',
                        'grapefruit juice', 'cranberry juice', 'amaretto', 'peach schnapps', 'melon liquor']
let all_ingredients_set = new Set(all_ingredients)
let substitutable = ['triple sec', 'blue curacao', 'orange liquer', 'aperol',
'seltzer', 'tonic','ginger ale', 'ginger beer', 'grenandine', 'sloe gin', 'lime juice', 
'lemon juice','sour mix', 'cranberry juice', 'amaretto']

let substitutable_set = new Set(substitutable)


let sub_info = {'triple sec': 'equal amounts of any other orange liqueur i.e. Grand Marnier, Cointreau, or Curacao <br>Or 2 teaspoons of Orange extract per table spoon of triple sec needed', 
'blue curacao':"Grand Marnier or Cointreau", 'orange liquer':' 2 tablespoons of unsweetened orange juice + 1/2 teaspoon orange extract for 2 tablespoons of Orange Liquer', 
'aperol':'Campari','seltzer':'Club Soda (we don’t recommend using tonic)', 
'tonic':'ginger beer or lemon-lime soda',
'ginger ale':'lemon-lime soda with splash of cola', 'ginger beer': 'maybe ginger ale, but it will taste quite different', 
'grenandine':'raspberry syrup, pomegranate molasses, or try cranberry or cherry cocktail concentrate', 
'sloe gin':'Plum (or any other fruit) brandy', 
'southern comfort':'Bourbon or Whiskey with triple sec and lime juice at a 1:1:4 ratio, add sugar if needed',
 'lime juice':'other citrus juices', 'lemon juice':'other citrus juices', 
 'sour mix':'(egg whites optional) lemon juice with simple syrup, margarita mix, orange juice + pineapple juice, lemonade',
'cranberry juice': 'any other dark, rich fruit juice - blueberry, raspberry, or red grape ',
'amaretto': 'another ‘nutty’ liqueur such as Frangelico, Kahlua  or Creme de Cacao<br> or Almond extract or orgeat Italian soda syrup(non-alcoholic)'
}

let path = 'images/';
 drinks_basicinfo = {ma: ['Margarita', '- Salt rim (if requested)<br>- 1.5 oz Tequila<br>- 0.5 oz Triple Sec<br>- 0.5 oz lime juice<br>- 2 oz sour mix<br>- lime garnish',path+'margarita.jpg'], 
 bw:  ['Blue Whale', '- 1.5 oz vodka<br> - 1 oz blue curacao<br>- 3 oz sour mix<br>- lemon garnish',path+'blue_whale.jpg'], 
ts: [ 'Tequila Sunrise', '- 1.5 oz Tequila <br>- Fill with orange juice<br>- Sink Grenandine down glass',path+"tequila_sunrise.jpg"],
cl: ['Cuba Libre','- 1.5oz Rum<br>- Fill with Coca-Cola<br>- Add a splash of lime juice',path+'cuba_libre.jpg'],
sd: ['Screwdriver', '- 1.5 oz Vodka<br>- Fill with orange juice',path+'screwdriver.jpg'], 
gh: ['Greyhound', '- 1.5oz Vodka<br>- Fill with grapefruit juice', path+'greyhound.jpg'],
ghsd: ['Salty Dog', '- Salt rim of glass<br>- 1.5 oz Vodka<br>- Fill with grapefruit juice',path+'salty_dog.jpg'],
cc: ['Cape Codder', '- 1.5oz Vodka<br>- Fill with cranberry juice',path+'cape_codder.jpg'], 
ob: ['Orange Blossom', '- .5 oz Gin<br>- Fill with orange juice',path+'orange_blossom.jpg'], 
plm: ['Paloma', '- 1.5 oz Tequila<br>- Fill with grapefruit juice',path+'paloma.jpg'],
bob: ['Bocce Ball','- 1.5 oz Amaretto<br>- Fill with orange juice',path+'bocce_ball.jpg'],
soh: ["Scarlett O'hara", '- 1.5 oz Southern Comfort<br>- Fill with cranberry juice',path+'scarlett_ohara.jpg'],
fn: ['Fuzzy Navel', '- 1.5 oz Peach Schnapps<br>- Fill with orange juice',path+'fuzzy_navel.jpg'],
hfn: ['Hairy Navel', '- 0.75 oz Vodka<br>- 0.75 oz Peach Schnapps<br>- Fill with orange juice',path+'hairy_navel.jpg'],
rick: ['Gin Ricky', '- 1.5 oz Gin<br>- Fill with seltzer<br>- Add a splash of lime juice', path+'gin_ricky.jpg'] ,
mad: ['Madras', '- 1.5 oz Vodka<br>- Fill with half cranberry juice and half orange juice', path+'madras.jpg'],
sex: ['Sex on the Beach', '- 0.75 oz Vodka<br>- 0.75 oz Peach Schnapps<br>- Fill with half cranberry juice and half orange juice', path+'sex_on_beach.jpg'],
mbb: ['Malibu Bay Breeze', '- 1.5 oz Malibu (rum)<br>- Fill with half pineapple juice and half cranberry juice', path+'malibu.jpg'],
mb: ['Melon Ball', '- 1 oz Vodka<br>- 0.5 oz Melon Liquor<br>- Fill with orange juice', path+'melon_ball.jpg'],
slc: ['Sloe Comfortable Screw', '- 0.5 oz Vodka <br>- 0.5 oz Sloe Gin<br>- 0.5 oz Southern Comfort<br>- Fill with Orange Juice',path+'sloe_screw.jpg'],
dst: ['Dark & Stormy', '- 1.5 oz (Dark) Rum<br>- 4 oz ginger beer<br>- Dash of lime juice<br>- Lime garnish', path+'darknstormy.jpg'],
mm:['Moscow Mule', '- 1.5 oz Vodka<br>- 4 oz ginger beer<br>- Dash of lime juice<br>- Lime garnish', path+'moscow-mule.jpg']}
console.log(drinks.margarita)
let my_ingredients = []
var slideIndex = 1;
// showDivs(slideIndex);
var pressed = false
var pressed2 = false
var old_img
var old_img2
var arrows = false
var boxes= []
var boxes2= []
let isSubset = function(s1, s2)
{
    return Array.from(s1).every((e)=>s2.has(e));
}
let isReplace = function(s = new Set(my_ingredients), x = 2){
    let close_drinks = {}
    let num_alt = 0
    for (let i in drinks){
        console.log(drinks[i])
        let num_miss = 0 
        let alt_bool = true
        let miss_ingr = []
        for(let j in Array.from(drinks[i]))
        {
            let current_ingr = Array.from(drinks[i])[j]
            console.log(current_ingr)
            if (!s.has(current_ingr) && substitutable_set.has(current_ingr))
            {
                console.log(current_ingr)
                num_miss += 1
                miss_ingr.push(current_ingr)
            }
            else if (!s.has(current_ingr) && !substitutable_set.has(current_ingr))
            {
                alt_bool = false
            }

        }

        if (alt_bool && (num_miss >=1 && num_miss<=x))
        {
            close_drinks[i] = miss_ingr
            num_alt+=1
        }
    }
    return [close_drinks,num_alt]
}
console.log(isReplace(new Set(['vodka','tequila'])))

// return: [num, drinks, message]
let returnDrink = function(s = new Set(my_ingredients)) {
    let returnList = []
    let num = 0
    let message = '';
    let alt_message = ''
    let possible_drinks = []
    let replace = isReplace(s)
    let close_drinks = replace[0]
    let num_alt = replace[1]
    for (let i in drinks){
        if (isSubset(drinks[i], s)){
            possible_drinks.push(i)
        }
    }
    let titles = []
    let messages = []
    let pics= []
    let titles2 = []
    let messages2 = []
    let alt_messages2 = []
    let pics2= []
    num = possible_drinks.length
    if (num === 0){
        num = 0
        console.log("Sorry no drinks for you")
        message += "Sorry no drinks for you<br>"
        document.getElementById('x1').innerHTML= "Sorry, no drinks were found.<br><br>"
        title1.innerHTML = ""
        recipe1.innerHTML =""
    }


 
    else{
        
        if (num === 1){
            boxes = []
            num = 1
            
            document.getElementById('x1').innerHTML = "We found 1 drink for you.<br><br>"
            //console.log("We found 1 drink for you:")
            message += "We found 1 drink for you: <br>"
        }
        else{
        console.log("We found "+ possible_drinks.length+" drinks for you")
        message += "We found "+ possible_drinks.length+" drinks for you: <br>"
        document.getElementById('x1').innerHTML = "We found "+ possible_drinks.length+" drinks for you.<br>"}
        tn = document.getElementById("thumbnail")
        console.log("BOO:" +tn.childNodes)
        while (tn.firstChild) {
            tn.removeChild(tn.firstChild);
        }
        boxes = []
        i = 0
        for (let d in possible_drinks){
            console.log('bye')
            let info = drinks_basicinfo[possible_drinks[d]]
            
            console.log("problem: "+info)
            console.log(info[0])
            console.log ('Details: <br>'+info[1])
            message+= "<br>"
            message+= info[0]+"<br>"
            message+= 'Details: '+ info[1] +"<br>"
            titles.push(info[0])
            messages.push('Details: <br>'+info[1])
            var img = document.createElement("img")
            img.src = info[2]
            img.style = "width:100%"
            img.className = "mySlides"
            console.log("hi"+ img)
            var src = document.getElementById("y");
            src.appendChild(img)
            pics.push(info[2])


            boxes.push(document.createElement('div'))
            boxes[i].className = 'box'
            img = document.createElement("img")
            img.src = info[2]
            var span = document.createElement('span')

            span.innerHTML = info[0];
            boxes[i].appendChild(img)
            boxes[i].appendChild(span);
            console.log(img)
            var src =document.getElementById("thumbnail")
            console.log(src)
            src.appendChild(boxes[i])
            //boxes.push(box)
            console.log('boxes: '+boxes)
            console.log(boxes[i])
            box =boxes[i]
            //boxes[i].addEventListener("click", boxes[i].style.backgroundColor = 'coral');
            boxes[i].onclick = function(){
                let index = 0
                for (let b in boxes)
                {
                    
                    boxes[b].style.backgroundColor = 'white'
                    if (boxes[b]==this){
                        index = b
                    }
                }
                //console.log(boxes)
                this.style.backgroundColor = 'coral'
                showDivs(index, titles, messages, pics)
            }
            i+=1
  
        }
        showDivs(0, titles, messages,pics)
        // if (!arrows){
        // console.log(titles.length)
        // var left = document.createElement("button")
        // left.className = "w3-button w3-display-left"
        // left.onclick = function() {
        //     plusDivs(-1,titles,messages,pics)}
        // left.innerHTML='&#10094'
        // var src_left = document.getElementById("y");
        // src_left.appendChild(left)
        // var right = document.createElement("button")
        // right.className = "w3-button w3-display-right"
        // right.onclick = function() {
        //     plusDivs(+1, titles, messages,pics)}
        
        // //right.addEventListener('click',plusDivs(+1) )

        // right.innerHTML='&#10095'
        // var src_right = document.getElementById("y");
        // src_right.appendChild(right)
        // showDivs(0,titles, messages,pics)
        // arrows = true
        //}
    }
    tn2 = document.getElementById("thumbnail2")
    console.log("BOO:" +tn2.childNodes)
    while (tn2.firstChild) {
        tn2.removeChild(tn2.firstChild);
    }

    if (num_alt >=1){
        message+= "<br>"
        if (num_alt == 1 && num > 0)
        {
            alt_message+= "We also found another drink you can ~maybe~ make with substitutions.<br>"
            document.getElementById('x2').innerHTML = "<br><br>We also found another drink you can ~maybe~ make with substitutions.<br><br>"
        }
        else if(num_alt >1 && num>0){
           alt_message+= "We also found " + num_alt+ " other drinks you can ~maybe~ make with substitutions.<br>"
           document.getElementById('x2').innerHTML = "<br><br>We also found " + num_alt+ " other drinks you can ~maybe~ make with substitutions.<br><br>"
        
        }
        else if(num_alt == 1 && num==0){
            alt_message+= "But we found a drink you can ~maybe~ make with substitutions.<br><br>"
            document.getElementById('x2').innerHTML ="<br>But we found a drink you can ~maybe~ make with substitutions.<br><br>"
        }
        else if(num_alt > 1 && num==0){
            alt_message+= "But we found " + num_alt+ " drinks you can ~maybe~ make with substitutions.<br><br>"
            document.getElementById('x2').innerHTML ="<br>But we found " + num_alt+ " other drinks you can ~maybe~ make with substitutions.<br>"
     
        }
        let j = 0
        boxes2 = []
    

        for (let d in close_drinks)
        {
            
            let info = drinks_basicinfo[d]
            alt_message+= "<br>"
            alt_message+= info[0]+"<br>"
            alt_message+= 'Details: '+info[1] +"<br>"
            alt_message+='You are only missing: '
            var sub_message = ""
            titles2.push(info[0])
            messages2.push('Details: <br>'+info[1])
            //messages2[j] = info[1]

            alt_messages2.push("Missing: ")
            
            var img = document.createElement("img")
            img.src = info[2]
            img.style=  "width:100%"
            img.className = "mySlides"
            var src2 = document.getElementById("y2")
            src2.appendChild(img)
            pics2.push(info[2])
            
            for (let i in close_drinks[d])
            {
                
                if (i>0){
                    alt_messages2[j]+= " and "
                    alt_message+=" and "
                }
                console.log(close_drinks[d][i])
               
                alt_message+= close_drinks[d][i]
                alt_messages2[j]+=close_drinks[d][i].bold()
                sub_message+= '<br>Substitute for ' +close_drinks[d][i].italics()+": "+ sub_info[close_drinks[d][i]]+"<br>"
            }
            alt_message+= '<br>'+sub_message 
            alt_messages2[j]+= '<br>'+sub_message 

            boxes2.push(document.createElement('div'))
            boxes2[j].className = 'box'
            img = document.createElement("img")
            img.src = info[2]
            var span = document.createElement('span')

            span.innerHTML = info[0]
            boxes2[j].appendChild(img)
            boxes2[j].appendChild(span)
            var src2 = document.getElementById('thumbnail2')
            src2.appendChild(boxes2[j])
            box = boxes2[j]
            boxes2[j].onclick = function(){
                let index =0
                for (let b in boxes2){
                    boxes2[b].style.backgroundColor = 'white'
                    if (boxes2[b]==this)
                    {
                        index = b
                    }
                }
                this.style.backgroundColor = 'coral'
                showDivs2(index, titles2, messages2, alt_messages2, pics2)
            }

            j+=1 
        }
        showDivs2(0, titles2, messages2,alt_messages2,pics2)
    }
    else if (num == 0){
        alt_message += "Try adding more ingredients."
        document.getElementById('x2').innerText = "Try adding more ingredients."
    }
    
    
    return {num, possible_drinks, message, alt_message, titles, messages,pics};
}; 

    


function buttonClicked() {
    alert('hello');

}

function addIngredient(){

    var input = document.getElementById("ingredients").value;
    console.log(input)
    let my_ingredients_set = new Set(my_ingredients)
    let ingredient_message = "My ingredients:"
    console.log(ingredient_message)
    if (all_ingredients_set.has(input) && !(my_ingredients_set.has(input)) ){
        
        my_ingredients.push(input)
        console.log(my_ingredients)
        }
    
    console.log("length" +my_ingredients.length)
    if (my_ingredients.length>0)
    {
        ingredient_message += " "+ my_ingredients[0]
        console.log(ingredient_message)
    }
    if (my_ingredients.length >1){
        for (i = 1; i < my_ingredients.length; i++) { 
            ingredient_message += ", "+ my_ingredients[i]
            console.log("hi")
        }
    }
    
    console.log(ingredient_message)
    // return my_ingredients;
    

    document.getElementById('my_ingredients').innerHTML = ingredient_message;

    document.getElementById("ingredients").value = ''
}

function submitClicked(){
    let sc = returnDrink(new Set(my_ingredients))
    //document.getElementById('num').innerHTML += sc.num;
    //document.getElementById('drinks').innerHTML = sc['possible_drinks'];
    //document.getElementById('message').innerHTML = sc.message;
    //document.getElementById('alt_message').innerHTML = sc.alt_message;
    //showImgtest();
    //addSlides();
}


function plusDivs(n,titles, messages,pics) {
  showDivs(slideIndex += n, titles, messages,pics);

}
// old_img = document.createElement("img")
// old_img.src ="margarita.jpg"
// var src = document.getElementById("y")
// src.appendChild(old_img)
function showDivs(n,titles,messages,pics) {
    for (let i in titles.length){
        boxes[i].style.backgroundColor = 'white'
    }
    boxes[n%titles.length].style.backgroundColor = 'coral'
    var i;
//   var x = document.getElementsByClassName("mySlides");
//   console.log(titles)
//   if (n > x.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none"; 
//   }
    var img = document.createElement("img")
    img.src = pics[n%titles.length]
    img.style = "width:100%"
    var src = document.getElementById("y")
    if (!pressed){
    src.appendChild(img)}
    else{
        src.replaceChild(img, old_img)
    }
    old_img = img
    // console.log(titles)
    title1.innerHTML = titles[n%titles.length]
    recipe1.innerHTML = messages[n%titles.length]
   
    if (!pressed){
    pressed = true
}   

}
  function showDivs2(n,titles2,messages2,alt_messages2,pics2) {
    for (let i in titles2.length){
        boxes2[i].style.backgroundColor = 'white'
    }
    boxes2[n%titles2.length].style.backgroundColor = 'coral'
      var j;

    var img = document.createElement("img")
        img.src = pics2[n%titles2.length]
        img.style = "width:100%"
        var src = document.getElementById("y2")
        if (!pressed2){
            src.appendChild(img)}
        else{
            src.replaceChild(img, old_img2)
        }
        old_img2 = img
    // console.log(titles)
    title2.innerHTML = titles2[n%titles2.length]
    recipe2.innerHTML = messages2[n%titles2.length]
    sub2.innerHTML = alt_messages2[n%titles2.length]
    if (!pressed2){
        pressed2 = true
    }   

    }
function showImgtest()
{
    var img = document.createElement("img");

    img.src = "margarita.jpg";
    img.src = "blue_whale.jpg";
    img.class = 'mySlides'
    var src = document.getElementById("x");

    src.appendChild(img);
    
}
function addSlides(){
    var img = document.createElement("img")
    img.src = "blue_whale.jpg"
    img.style = "width:100%"
    img.className = "mySlides"
    console.log(img)
    var src = document.getElementById("y");
    src.appendChild(img)
}




