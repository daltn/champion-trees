import React from 'react';
import soundcloud from '../img/soundcloud.svg';
import instagram from '../img/instagram-icon.svg';
import fb from '../img/fb.png';
import twitter from '../img/twitter.png';

const ContactCard = () => {
  return (
    <article className="flex-contain">
      <div>
        <strong>Contact:</strong>
        <section className="flex-card">
          <br />
          <div>
            <p>Brian Kelley</p>
            <p>Gathering Growth Photographer & Archivist</p>
            <a href="mailto:b.kelley@gatheringgrowth.com">
              b.kelley@gatheringgrowth.com
            </a>
          </div>
          <div>
            <p>Sara Meghdari</p>
            <p>Project Manager</p>
            <a href="mailto:s.meghdari@gatheringgrowth.com">
              s.meghdari@gatheringgrowth.com
            </a>
          </div>
        </section>
      </div>
      <section>
        <a
          href="https://twitter.com/gatheringgrowth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{
              paddingTop: `0`,
              marginBottom: `30px`,
              marginRight: `10px`,
            }}
            src={twitter}
            width="25"
            alt="twitter"
          />{' '}
        </a>
        <a
          href="https://www.instagram.com/champion_trees/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{
              paddingTop: `0`,
              marginBottom: `30px`,
              marginRight: `10px`,
            }}
            src={instagram}
            width="25"
            alt="instagram"
          />{' '}
        </a>
        <a
          href="https://www.facebook.com/Gathering-Growth-Foundation-105298694471186/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{
              paddingTop: `0`,
              marginBottom: `30px`,
              marginRight: `10px`,
            }}
            src={fb}
            width="25"
            alt="facebook"
          />{' '}
        </a>

        <a
          href="https://soundcloud.com/user-954267106"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ paddingTop: `0`, marginBottom: `30px` }}
            src={soundcloud}
            width="30"
            alt="soundcloud"
          />
        </a>
      </section>
    </article>
  );
};

export default ContactCard;
