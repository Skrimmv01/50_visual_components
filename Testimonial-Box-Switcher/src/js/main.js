const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const user_img = document.querySelector('.user-img');
const username = document.querySelector('.username');
const user_role = document.querySelector('.role');

const testimonials = [
    {
      name: 'Miah Myles',
      position: 'Marketing',
      photo: 'https://randomuser.me/api/portraits/women/46.jpg',
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam autem illo debitis quam? Reiciendis deserunt maiores provident esse cum libero quod? Libero maxime veritatis, nesciunt saepe quasi hic iure!Esse hic qui neque facere numquam, vel porro omnis nam velit nisi nemo quos deserunt ratione a modi autem veniam temporibus quis. Atque non earum minima quo.",
    },
    {
      name: 'June Cha',
      position: 'Software Engineer',
      photo: 'https://randomuser.me/api/portraits/women/90.jpg',
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur sequi pariatur labore, possimus doloremque. Voluptates ipsum vero reiciendis obcaecati cupiditate, eveniet rerum modi odio officia sed deleniti labore voluptatibus!Hic nesciunt officia minima reprehenderit harum quod temporibus. Molestiae, debitis adipisci obcaecati quasi neque.",
    },
    {
      name: 'Renee Smith',
      position: 'Web Designer',
      photo: 'https://randomuser.me/api/portraits/women/26.jpg',
      text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus ratione laborum quae voluptatibus debitis soluta quo cupiditate nihil natus, amet nostrum voluptatem earum modi quidem facilis totam reiciendis neque! Tempora maxime quos, impedit aut, distinctio dignissimos sed aspernatur earum quia dolor minus. Iste maiores.",
    },
    {
      name: 'Renan Duarte',
      position: 'Graphic Designer',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus similique maiores Saepe praesentium illum!",
    },
    {
      name: 'Jonathan Nunfiez',
      position: 'Teacher',
      photo: 'https://randomuser.me/api/portraits/men/25.jpg',
      text:
        "There are many variations similique maiores Saepe of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.",
    },
    {
      name: 'Sasha Jones',
      position: 'Accountant',
      photo: 'https://randomuser.me/api/portraits/women/66.jpg',
      text:
      "Ste necessitatibus voluptatibus similique maiores Saepe praesentium illum voluptates facilis nihil consectetur error nulla recusandae maiores suscipit, pariatur excepturi debitis laudantium incidunt necessitatibus asperiores, iste vel cum, veritatis nesciunt repudiandae rem corporis. Optio, voluptatum unde!",
    },
    {
      name: 'Rita Wilson',
      position: 'Doctor',
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."
    },
  ];

  let idx = 0;

  updateTestimonial()

  function updateTestimonial()
  {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    user_img.src = photo;
    username.innerHTML = name;
    user_role.innerHTML = position;

    idx++

    if(idx > testimonials.length - 1)
    {
        idx = 0
    }
  }

  setInterval(updateTestimonial, 10000);
