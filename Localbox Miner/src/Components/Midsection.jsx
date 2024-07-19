import React, { useContext } from 'react';
import { ThemeContext } from '../context/Themecontext';


const Midsection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: 'justify', background: theme == 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white',padding:'20px 30px',borderRadius:'60px'}}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta in ullam accusantium ut incidunt! Non illum mollitia amet quas earum vero. Corporis error labore repudiandae officia itaque voluptatem harum necessitatibus?
      A doloribus enim officia sapiente dolor mollitia non, reprehenderit laudantium voluptas facere ipsa tempore obcaecati harum at, cumque aspernatur atque laborum nisi magnam optio recusandae quibusdam! Esse architecto minima culpa!
      Autem repudiandae, blanditiis ipsum, laudantium aperiam quaerat rerum accusantium quidem voluptatum omnis nobis numquam, mollitia harum ex quod dolorum voluptas. Fuga sint consequuntur laudantium molestiae unde assumenda, nihil excepturi blanditiis!
      Magnam dolorem magni illum quam, repudiandae adipisci voluptatum labore aliquam, quasi velit reprehenderit! Incidunt maiores quibusdam iure, aspernatur facilis, commodi ipsa hic id modi, obcaecati dolore placeat corrupti quae nemo.
      Mollitia recusandae nam illo dignissimos optio quos fugit eum quidem nobis, ad distinctio? Maxime adipisci quo accusantium nostrum dolorum porro, enim, eaque molestias ipsa necessitatibus rem earum repellat harum? Ea.
      Aliquid in adipisci animi saepe dolorem officia dolores! Possimus, perferendis, veritatis sunt delectus ratione nesciunt quibusdam quas maiores perspiciatis, dolorem praesentium consequuntur doloribus architecto! Neque velit accusantium cupiditate ea id?
      Ad dolorum quis doloribus ut architecto esse non provident! Cumque consectetur non cum deserunt, nemo impedit est quae error eligendi aspernatur beatae amet repellat nisi aliquam quia omnis vel quam!
      Sapiente ipsa eum ratione corporis quis voluptatem ad minus, sint ab nobis, ullam excepturi laudantium commodi dolor iure, natus dicta qui! Ex nulla aliquam suscipit quis, id aut voluptatibus vel.
      Fuga, harum, provident nobis reprehenderit expedita dolores saepe, tempore error libero fugit earum veritatis dolorum! Iure, soluta nemo quae modi ut, nihil eligendi sapiente deleniti aliquam in at inventore cum.
      Enim praesentium tenetur porro, veritatis beatae culpa? Ad aspernatur quaerat sint dolorem nemo odio suscipit doloremque rerum maxime fugit ipsum veritatis dignissimos, nulla earum autem dolore culpa! Quia, sapiente beatae.</p>
    </div>
  );
};

export default Midsection;
