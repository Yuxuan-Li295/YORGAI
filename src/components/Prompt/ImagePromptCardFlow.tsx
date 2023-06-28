import { css } from "@emotion/css";
import { ImagePromptCard } from "components/Prompt/ImagePromptCard";
import Bird from "resources/img/bird.jpg";
import View from "resources/img/view.jpeg";

const ImagePromptCardFlow = () => {
  return (
    <div
      className={css`
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 21px;
        max-width: 1200px;
      `}
    >
      {[1, 2, 3, 4].map((index) => {
        return (
          <div
            className={css`
              display: flex;
              flex-direction: column;
              width: 100%;
              gap: 16px;
            `}
            key={index}
          >
            {!!(index % 2) && (
              <ImagePromptCard
                image={Bird}
                prompt={
                  "walking on the starlight, dreamy ultra wide shot, atmospheric, hyper realistic, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw"
                }
                likeCount={249}
                runCount={13}
              />
            )}
            {!(index % 2) && (
              <ImagePromptCard
                image={View}
                prompt={
                  "walking on the starlight, dreamy ultra wide shot, atmospheric, hyper realistic, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw"
                }
                likeCount={249}
                runCount={13}
              />
            )}
            <ImagePromptCard
              image={View}
              prompt={
                "walking on the starlight, dreamy ultra wide shot, atmospheric, hyper realistic, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw"
              }
              likeCount={249}
              runCount={13}
            />
            <ImagePromptCard
              image={Bird}
              prompt={
                "walking on the starlight, dreamy ultra wide shot, atmospheric, hyper realistic, epic composition, cinematic, octane render, artstation landscape vista photography by Carr Clifton & Galen Rowell, 16K resolution, Landscape veduta photo by Dustin Lefevre & tdraw"
              }
              likeCount={249}
              runCount={13}
            />
          </div>
        );
      })}
    </div>
  );
};

export { ImagePromptCardFlow };
