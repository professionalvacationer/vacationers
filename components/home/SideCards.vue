<template>
  <v-card flat>
    <v-row class="d-flex justify-center">
      <v-card-title
        id="title"
        class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h3 text-h4 py-8"
      >
        PV What?
      </v-card-title>
    </v-row>
    <v-row class="mt-3 mb-7">
      <v-card class="card1">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">Why PVU Created</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          Professional Vacationers Unlimited was created to bring awareness to
          our favorite activity, traveling. Through PVU we hope to allow people
          to get out and experience new things and have the ability to create
          new possibilities. Through exploration and education we can enjoy the
          present to the fullest extent while preserving our beautiful and
          precious destinations for future generations. In the course of this we
          strongly encourage and promote responsible tourism and sustainable
          habits. A great place to start this practice is simply within our
          communities and nearby surroundings. In turn we will do so on our
          adventures as well and take what we learn there back to our homes and
          communities continuing the process.
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/about" small color="accent">More on Why</v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card2">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">How PVU Works</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          PVU is made possible by Professional Vacationers working together both
          users and creators. Vacationers are able to view all of the content
          plus create some their own for others to experience. They will also
          able to save all of their favorites, which are stored and organized on
          their profile page. Pro Creators have found their way through,
          <nuxt-link to="/opportunities">PVU Opportunities</nuxt-link>
          , and are able to create articles, projects, podcasts, and share
          videos from Youtube. Pro Creators also have the option to be
          'hydrated' for their extra services.
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/about" small outlined color="accent">PVU Mission</v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card3">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">PVU Who?</v-card-title>
        </v-row>

        <v-card-subtitle id="text">
          Professional Vacationers Unlimited was created by longtime friends
          Devin Shook and Max Hoven. The two have been working and traveling
          throughout the world for a combined 20 years. Through their journeys
          they have each developed their own strengths and skills in their
          respected fields. They now are seeking to grow the "Professional
          Vacationer" community and create a harmonious relationship throughout
          the world and it's belongings.
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/about" small color="accent">Meet the Team</v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card4">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">Hydration Station</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          To help continue to provide the services and bring new features on
          vacationers.pro we have set up a Hydration Station, which allows users
          to extend a monetary supplement through Paypal, CashApp, Venmo, and
          select cryptocurrencies. This is made available directly to the site
          and to the "Pro Creators". All hydration is greatly appreciated by the
          creators and all users of Professional Vacationers Unlimited!
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn id="hydrate" to="/hydratePvu" small outlined color="accent">
              <v-icon id="can" color="accent">mdi-watering-can</v-icon>
              ``PVU
            </v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card5">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">PVU Research and Prep</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          You're ready for your next adventure. You're also busy with everyday
          tasks. Let us ease your mind and take care of the difficult stuff. We
          will keep your trip personal, and include all of our findings and our
          thought process behind our research so you can be best prepared for
          your next trip. By explaining our thought process, tips and tricks to
          find cost efficient travel experiences, you can be assured you will be
          prepared to fully enjoy your next vacation. You will also be in a
          position to take care of your next trip on your own if you desire!
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/servicesPvu" small color="accent">
              Initiate Relax Mode
            </v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card6">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">PVU Guiding</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          Currently, limited guiding services are availably provided by PVU
          cofounder Devin Shook. He will be offering seasonal private guiding in
          specific local areas. From historic tours, castle exploration,
          underwater discovery, river trips, and much more, his experioences are
          far and wide. If desired guided trips can also be made available in
          select regions throughout the world. Contact us today to see what is
          available!
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/servicesPvu" small outlined color="accent">
              Explore our Tours
            </v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card1">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">PVU Discovery Stays</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          PVU is working on bringing you unique, sustainable, and educational
          stays throughout the world. These specific stays will focus on
          repurposed materials, and offer a direct connection to fun and
          exciting activiites in their respected areas. Also, during your stay
          you will be able to expect educational materials on sustainable
          travel, and guides to your next great adventure!
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/servicesPvu" small color="accent">
              Discover the Stay
            </v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card2">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">PVU Budget Coaching</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          Sometimes the things we want to do and the things we can do, are not
          always possible at first glance. This sometimes has to do with money
          management. However, with the proper guidance from long time
          Professional Vacationers you can achieve the things that you desire.
          Do not we can help analyze and help get you pointed in the right
          direction through our budget coaching and guidance services.
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/servicesPvu" small outlined color="accent">
              Book a Session
            </v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card3">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">PV Web</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          Through the creators of PVU spins off PV Web. Providing advice, custom
          designs, logo design, social media production, menu design, photo
          editing, website development and much more. PVU incorporates a touch
          of culture and uniqueness into your next project!
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/servicesPvu" small color="accent">PV Web</v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card4">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">Opportunities</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          We are always trying to grow and create more extraordinary
          possiblities. To do this we need help from the outside. As PVU grows
          so do the people within the organization. If you think you could make
          a contribution towards our mission then check out our opportunities
          today!
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/opportunities" small outlined color="accent">
              Unlock the possibilities
            </v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>

    <v-row class="my-7">
      <v-card class="card5">
        <v-row class="d-flex justify-center">
          <v-card-title class="pb-0">Contact Us</v-card-title>
        </v-row>
        <v-card-subtitle id="text">
          If you have any comments, suggestions, inquiries, or whatever it may
          be, feel free to reach out to us and we will do our best to respond as
          quickly as possible. You can reach us on Facebook, Instagram, Twitter
          or by contacting us
          <nuxt-link to="/contactUs">through this easy form</nuxt-link>
          . We look forward to hearing from you and helping meet your needs.
          <v-row class="d-flex justify-center pt-3 pb-0">
            <v-btn to="/contactUs" small color="accent">
              vacationer requests
            </v-btn>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-row>
  </v-card>
</template>

<style scoped>
#id {
  text-decoration: none;
}
#title {
  word-break: keep-all !important; /*this stops the word breaking*/
  font-style: normal;
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 700;
}
.card1 {
  transition-property: none !important;
  box-shadow: 1px 1px 1px 4px #00bcd4 !important;
  color: black !important;
}
.card2 {
  transition-property: none !important;
  box-shadow: 1px 1px 1px 4px green !important;
}
.card3 {
  transition-property: none !important;
  box-shadow: 1px 1px 1px 4px red !important;
}
.card4 {
  transition-property: none !important;
  box-shadow: 1px 1px 1px 4px yellow !important;
}
.card5 {
  transition-property: none !important;
  box-shadow: 1px 1px 1px 4px purple !important;
}
.card6 {
  transition-property: none !important;
  box-shadow: 1px 1px 1px 4px orange !important;
}
#text {
  color: black !important;
}
</style>
