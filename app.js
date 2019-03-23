const pageState = function(){
    let currentState = new homeState(this);

    this.init = function(){
        this.change(new homeState);
    }

    this.change = function(state){
        currentState = state;
    }
}

const homeState = function(page){
    document.querySelector('.content').innerHTML =`
    <div class="row">
        <article class="appInfo">
            <h2>Lorem ipsum</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br> 
                Harum, quae assumenda asperiores voluptatem nam commodi,<br> 
                incidunt magnam illum cupiditate fugit enim facilis, repellat quidem.<br> 
                Sequi at rerum quod veniam voluptate.</p>
                <button class="button-primary"><i class="fas fa-arrow-alt-circle-down"></i> Download</button>
                <div class="one-half column phones">
                        <i class="fas fa-mobile"></i>
                        <i class="fas fa-tablet"></i>
                        <i class="fas fa-desktop"></i>
                
        </article>
    </div>

    <div class="row">
        <div class="offers">
                <li><i class="fab fa-adobe"></i><br>
                    Lorem, ipsum dolor sit amet consectetur<br>  adipisicing elit.
                    Harum, quae assumenda <br> asperiores voluptatem  nam commodi,
                    <br>incidunt magnam illum cupiditate <br>fugit enim facilis, repellat quidem.
                </li>
                <li>  <i class="fas fa-file-code"></i><br>
                    Lorem, ipsum dolor sit amet consectetur<br>  adipisicing elit.
                    Harum, quae assumenda <br> asperiores voluptatem  nam commodi,
                    <br>incidunt magnam illum cupiditate <br>fugit enim facilis, repellat quidem.
                    </li>
                    <li><i class="fas fa-award"></i><br>
                        Lorem, ipsum dolor sit amet consectetur<br>  adipisicing elit.
                        Harum, quae assumenda <br> asperiores voluptatem  nam commodi,
                        <br>incidunt magnam illum cupiditate <br>fugit enim facilis, repellat quidem.
                        </li>
        </div>
    </div>

<div class="row">
    <div class="workTime">
        <h2>Work time during the week</h2>
        <li>
                <i class="fas fa-clock"></i> <br> 8.00AM - 5.00PM
        </li>

        <li><i class="fas fa-calendar-week"></i> <br>Monday-Friday</li>
        <li><i class="fas fa-map-marker-alt"></i> <br> Available at <a href="#">Location</a> </li>
    </div>
</div>

<div class="row">
    <div class="impressions">
        <h2>Impressions</h2>
      <article class="ImpressionOne">
       <i class="fas fa-user-astronaut"></i> <h6>Lone Ranger</h6>
        <p>Awesome service, quick and fast, and made with high detail Totally satisfied.</p>
        <button class="like"><i class="fas fa-thumbs-up"></i> upvote</button>
        <button class="dislike"><i class="fas fa-thumbs-down"></i> downvote</button>
      </article>

      <article class="ImpressionTwo">
            <i class="fas fa-user-ninja"></i> <h6>Ninja User232</h6>
            <p>High quality of service, a reliable worker, all done before deadline </p>
            <button class="like"><i class="fas fa-thumbs-up"></i> upvote</button>
            <button class="dislike"><i class="fas fa-thumbs-down"></i> downvote</button>
          </article>

          <article class="ImpressionThree">
                <i class="fas fa-user-tie"></i> <h6>Jack2424</h6>
                <p>Uniqe and Discreet work, definietly recommending the site</p>
                <button class="like"><i class="fas fa-thumbs-up"></i> upvote</button>
                <button class="dislike"><i class="fas fa-thumbs-down"></i> downvote</button>
              </article>
    </div>
    
    `;
}

//Contact state

const contactState = function(page){
    document.querySelector('.content').innerHTML=`
    <div class="form-container">
    <h1 align="center">Contact us here</h1>
    <form>
    <label for="name">Name</label>
       <input id="name" type="text" name="Name">
  
       <label for="email">Email</label>
    <input id="email" type="email" name="Email">
  
    <label for="message">Message</label>
    <textarea id="message" name="Message"></textarea>
  <input class="button-primary" type="submit" value="Submit" />
  </form>
  </div>
    `;
}

//Instantiate page state


const page = new pageState();

// Init the first state
page.init();

const home = document.getElementById('home');
const contact = document.getElementById('contactUs');

home.addEventListener('click', (e) =>{
    page.change(new homeState);
 
    e.preventDefault();
});

const footer = document.querySelector('.footer');

contact.addEventListener('click', (e) => {
    page.change(new contactState);
     footer.style.marginTop= "6.9em";
    e.preventDefault();
});