// on the avaliable cats page, only show info about
// name, gender, dateofBirth, Breed, images

// on filter, only can filter on
// age, gender, short/long hair

// on single cat detail page, show all info
// *************************************
// there is one age field that need to be derived from date of birth
// display age number and group [Adult]
// *************************************

// import all cats image
import Nathan from "./catsPicture/Nathan.jpeg";
import Freta_1 from "./catsPicture/Freya_1.jpeg";
import Freta_2 from "./catsPicture/Freya_2.jpeg";
import Rosa from "./catsPicture/Rosa.jpeg";
import Minnie_1 from "./catsPicture/Minnie_1.jpeg";
import Minnie_2 from "./catsPicture/Minnie_2.jpeg";
import Minnie_3 from "./catsPicture/Minnie_3.jpeg";
import Minnie_4 from "./catsPicture/Minnie_4.jpeg";
import Chiffon from "./catsPicture/Chiffon.jpeg";
import Bartholomew_1 from "./catsPicture/Bartholomew_1.jpeg";
import Bartholomew_2 from "./catsPicture/Bartholomew_2.jpeg";
import Bartholomew_3 from "./catsPicture/Bartholomew_3.jpeg";
import Bartholomew_4 from "./catsPicture/Bartholomew_4.jpeg";
import Hurley_1 from "./catsPicture/Hurley_1.jpeg";
import Hurley_2 from "./catsPicture/Hurley_2.jpeg";
import Hurley_3 from "./catsPicture/Hurley_3.jpeg";
import Hurley_4 from "./catsPicture/Hurley_4.jpeg";

const cats = [
  {
    name: "Nathan",
    gender: "male",
    dateOfBirth: "April 9, 2013",
    breed: "Domestic L Hair",
    images: [Nathan],

    isShortHair: false,

    videoLink: null,
    intro: `Nathan is a handsome gentleman who came from a home with other cats - went to a shelter - and then came into our care.

        He has been around other cats in all of those places and is a very sweet boy.
        The only thing he does object to are tangles in his lovely soft fur.
        Nathan arrived with very bad mats and although most of them have since been removed, he doesn't have a lot of patience for long "emergency" grooming sessions.
        He will need someone who is willing to brush him fairly often, so that he doesn't get into such a sad state again!
        
        Nathan is a fairly independent boy - not overly needy - and a good companion without being in your face all the time.
        He doesn't mind being picked up, but I don't think he's had very much of that type of attention.
        
        If you are looking for a cool dude to just hang out with and chill, Nathan might be your guy.
        He's fine with other cats but doesn't really interact with them too much.
        He would probably also be fine as a single cat if he had a person who was around a lot.`,
    color: "Orange Tabby",
    specialNotes: null,
    isSpayOrNeuter: true,
    specialNeeds: null,
    isMicrochipped: true,
    isVaccinated: true,
    goodWithKids: "Probably",
    goodWithDogs: "Unknown",
    goodWithCats: "Yes",
  },
  {
    name: "Freya",
    gender: "female",
    dateOfBirth: "February 01, 2020",
    breed: "Domestic S Hair",
    images: [Freta_1, Freta_2],

    isShortHair: true,

    videoLink: null,
    intro: `Freya was saved from street life by some wonderful people and was very pregnant when she arrived at her foster home.

    She has been raising her four kittens in a house with two adults and a dog.
    
    Freya was instantly trusting of her new foster family, looking for pets as soon as she left her carrier.
    She is friendly and affectionate, and her playful side is starting to come through now that her kittens are starting to grow up and become more independent (her kittens have all been adopted now)
    
    She’s a wonderful companion with a calm presence.
    She immediately jumps on the couch to sit next to her foster family when they sit down, purring away.
    
    Freya would be happy as an only cat in a fairly quiet house.
    
    Freya has a spay appointment set for June 18, 2021.`,
    color: "Brown Tabby",
    specialNotes: null,
    isSpayOrNeuter: true,
    specialNeeds: null,
    isMicrochipped: false,
    isVaccinated: false,
    goodWithKids: "Ok with older children / teens",
    goodWithDogs: "No",
    goodWithCats: "Would prefer to be a single",
  },
  {
    name: "Rosa",
    gender: "female",
    dateOfBirth: "May 12, 2018",
    breed: "Domestic S Hair",
    images: [Rosa],

    isShortHair: true,

    videoLink: null,
    intro: `Poor Rosa has had a hard-knock life so far, but is hoping for something wonderful to come her way - she really deserves it!

    Rosa came to us as a single, pregnant mom along with the one surviving (4 month old) kitten from her last litter.
    
    She raised her kids and they have all been adopted - now she needs and deserves a home of her own.
    
    But here is the challenge - Rosa has been let down by humans so far and still doesn't trust.
    She prefers to hide from new things, but has NEVER shown the slightest hint of aggression.
    She will allow you to pet her gently, but does not seek out attention yet.
    
    Rosa is fabulous with other cats...
    
    The perfect home for this fluffy and elegant cat is one with another gentle and social kitty around for companionship.
    Rosa may never be a lap cat - but she will be a beautiful companion and you will have given a sweet kitty a new lease on a happy life.`,
    color: "Brown Tabby",
    specialNotes: "Very Shy",
    isSpayOrNeuter: true,
    specialNeeds: null,
    isMicrochipped: true,
    isVaccinated: true,
    goodWithKids: "Ok with older children / teens",
    goodWithDogs: "Unknown",
    goodWithCats: "Yes",
  },
  {
    name: "Minnie",
    gender: "female",
    dateOfBirth: "February 11, 2012",
    breed: "Domestic L Hair",
    images: [Minnie_1, Minnie_2, Minnie_3, Minnie_4],

    isShortHair: false,

    videoLink: null,
    intro: `Lovely Min!

    Minnie came to us from a shelter situation where she was being passed over because she is a refined and delicate lady "of a certain age"...
    
    She is only 8 years young and has so much love to offer the right home!
    
    From the tip of her charmingly crumpled ear, to the tips of her tiny toes, she is a purring, head-bonking, amazing cuddle bug.
    
    Minnie is good with other cats and would be fine with respectful dogs.
    She loves people of all ages - as long as they have a nice lap to curl up on.
    
    Minnie  could be adopted into a home with another gentle cat, or would be fine as a single cat as long as she had people who were home a lot for her to cuddle with.
    `,
    color: "Orange and White",
    specialNotes: null,
    isSpayOrNeuter: true,
    specialNeeds: null,
    isMicrochipped: false,
    isVaccinated: true,
    goodWithKids: "Probably",
    goodWithDogs: "Unknown",
    goodWithCats: "Yes",
  },
  {
    name: "Chiffon",
    gender: "female",
    dateOfBirth: "February 10, 2019",
    breed: "Domestic S Hair",
    images: [Chiffon],

    isShortHair: true,

    videoLink: null,
    intro: `
    What a sweet and sassy young lady!

    Chiffon came to us from a shelter - and she has lots of character!

    She is a huge fan of head scritches and pats - not such a big fan of being picked up but she will tolerate it!

    This little diva will steal your heart in no time flat

    Chiffon is good with most other cats, but she would also be fine with just humans - as long as they were willing to adore and pamper her!
    `,
    color: "Brown Tabby",
    specialNotes: null,
    isSpayOrNeuter: true,
    specialNeeds: null,
    isMicrochipped: true,
    isVaccinated: true,
    goodWithKids: "Ok with older children / teens",
    goodWithDogs: "Unknown",
    goodWithCats: "Yes",
  },
  {
    name: "Bartholomew",
    gender: "male",
    dateOfBirth: "March 28, 2014",
    breed: "Maine Coon Cross",
    images: [Bartholomew_1, Bartholomew_2, Bartholomew_3, Bartholomew_4],

    isShortHair: false,

    videoLink: "https://youtu.be/kMA7pQFN_aI",
    intro: `Bartholomew is a 7~ year old Maine Coon X who came to Abbey Cats through a cat shelter north of the city,  and was eager from the start to be back inside the warmth and comforts of a home!

    He is obviously familiar with the pleasures of life as a pet, as he is always incredibly friendly, social, and ADORES cuddling.
    
    You won't have an issue becoming intimate with Bart - in fact, you may find yourself swatting him away instead!
    That being said, he is very respectful of personal space, and will love a perch or chair of his own to watch you while you work.
    He loves to follow humans around, and will sometimes meow and vocalize, saying, "Hi! Hello!" before settling down for a good old fashioned nap.
    
    Bart is still very stimulated by toys and social interaction.
    He is a larger boy, and sometimes seems lazy, but he is truly eager for some physical stimulation and exercise.
    His favourite toys are a tall cat condo, chasing the laser pointer, and being around his pet owners.
    
    Since he is a Maine Coon (cross), he has very long hair that needs combing and grooming from his adopters.
    Currently, he has a bit of matted hair, but he so thoroughly enjoys grooming - he will grab the comb and brush himself for you!
    
    Any adopter must be prepared to spend time in daily grooming and needs to have experience with a long haired cat.
    .
    Bartholomew would be extremely friendly to all people - his size is the same as a small child but he would probably do well in a family setting.
    
    He would like to have another laid back cat friend or would be fine with a person who is home most of the day.
    
    ****Experience with long haired cats is required- so that his beautiful coat doesn’t get so matted again*****`,
    color: "Maine Coon Cross",
    specialNotes: null,
    isSpayOrNeuter: true,
    specialNeeds: null,
    isMicrochipped: false,
    isVaccinated: true,
    goodWithKids: "Unknown",
    goodWithDogs: "Unknown",
    goodWithCats: "Yes",
  },
  {
    name: "Hurley",
    gender: "male",
    dateOfBirth: "March 17, 2011",
    breed: "Domestic S Hair",
    images: [Hurley_1, Hurley_2, Hurley_3, Hurley_4],

    isShortHair: true,

    videoLink: null,
    intro: `Hurley was surrendered to Abbey cats and thankfully so.
    He is approximately 9 or 10 yrs old and wasn’t in great shape.
    
    He was soon diagnosed with diabetes (now in remission) and he also had severely infected teeth which has all been taken care of THANKS TO ABBEY CATS, and he is now starting to understand how it feels to be healthier.
    
    At first, it was hard for him to trust people and didn’t like to be touched, petted and definitely not picked up.
    However now he loves to have his chin, head and neck scratched and kissed, gently petted on his head and back and totally enjoys it when you talk to him.
    He is a little independent but an amazing guy and don’t let him suck you into feeding him too often with his persuasive ways.
    
    He can’t jump up onto the bed or sofa so if you would like him to sleep or sit with you, he will need stairs to climb up (which he learned how to do within a day with treats of course).
    He has come along way and is showing more affection, loyalty and charming character
    
    He doesn’t do well with other cats, dogs and or children.
    
    Hurley is best suited in a quiet home and will need someone who understands diabetes and take BG (Blood Glucose) readings that will need to be taken every 3 days.
    
    Feeding should be 90% protein (wet food) 10% carbs (dry food) to keep the glucose levels down.`,
    color: "Orange Tabby",
    specialNotes:
      "Diabetic in remission, will need BG levels taken every 3 days",
    isSpayOrNeuter: true,
    specialNeeds: "Yes",
    isMicrochipped: false,
    isVaccinated: true,
    goodWithKids: "No",
    goodWithDogs: "No",
    goodWithCats: "No",
  },
];

export default cats;
