import { StyledDiv, StyledSpecial } from "./ProductCenterDiv.style";
import Gallery from "react-grid-gallery";

export default function ProductCenterDiv() {
  const IMAGES = [
    {
      src: "	https://www.likealocalguide.com//blog/wp-content/uploads/2014/05/rsz_notredameparis-1200x800.jpg",
      thumbnail:
        "	https://www.likealocalguide.com//blog/wp-content/uploads/2014/05/rsz_notredameparis-1200x800.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "	https://www.likealocalguide.com/blog/wp-content/uploads/2016/11/shutterstock_143327113-1047x800.jpg",
      thumbnail:
        "	https://www.likealocalguide.com/blog/wp-content/uploads/2016/11/shutterstock_143327113-1047x800.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "https://www.likealocalguide.com/media/cache/c0/02/c00292f32260dfb80a0e1516b75a8439.jpg",
      thumbnail:
        "https://www.likealocalguide.com/media/cache/c0/02/c00292f32260dfb80a0e1516b75a8439.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://www.likealocalguide.com/media/cache/40/b0/40b0b75a5680ea2eb7b3bb073a6c6191.jpg",
      thumbnail:
        "https://www.likealocalguide.com/media/cache/40/b0/40b0b75a5680ea2eb7b3bb073a6c6191.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "	https://www.likealocalguide.com/blog/wp-content/uploads/2016/11/paris_flea_market.jpg",
      thumbnail:
        "	https://www.likealocalguide.com/blog/wp-content/uploads/2016/11/paris_flea_market.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
  ];

  return (
    <StyledDiv>
      <h1>Why locals love it</h1>
      <p>
        'Madrid al Cielo' - Madrid to heaven, is a popular proverb in the
        Spanish captial, and on top of the art building Círculo de Bellas Artes
        in Madrid, locals can almost reach the sky. The rooftop terrace offers
        stunning views of downtown Madrid, and as far as the snowcovered
        mountain peaks on the horizon.
      </p>

      <div>
        <Gallery images={IMAGES} />
      </div>

      <div>
        <p>&nbsp;</p>
        <h1>Why you should visit it</h1>
        <p>
          The view from here is a can't miss when visiting Madrid. Enjoy
          refreshments from the rooftop bar, and chill out in the big lounge style
          couches. You will find good space to move around, which makes it easier
          to find a perfect shot of the capital's skyline - with architectural
          highlights like Palacio de Cibeles and the Metropolis building.
        </p>
      </div>

      <StyledSpecial>
        <h1>Special tip</h1>
        <p>
          Tickets are bought in the lobby, and if you like art you should check
          out the galleries on the first few floors.
        </p>
      </StyledSpecial>
    </StyledDiv>
  );
}
