import { Wrapper } from "./notfoundcss";

export const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <video
          class="http-status-message__ufo"
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          playsinline="playsinline"
        >
          <source
            src="https://www.ikea.com/in/en/static/mp4s/ufo.2d5c35ab6c116cc323bb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="divider">
        <h2>Oops! Something went wrong :(</h2>
        <p>The page you are looking for can't be found.</p>
        <p>Maybe the links below can be helpful.</p>
        <a href="/">Go back to the IKEA homepage</a>
      </div>
    </Wrapper>
  );
};
