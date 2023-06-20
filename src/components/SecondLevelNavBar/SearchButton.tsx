import { css } from '@emotion/css';
import { basis, basisAlt, white } from 'components/constants/colors';
import { ReactComponent as Magnifier } from 'resources/img/Magnifier.svg';

const SearchButton = () => {
  return (
    <div className={css`
            display: flex;
            align-items: center;
            gap: 11px;
            width: 251px;
            height: 32px;
        `}>
      {/* Search Bar */}
      <div className={css`
                display: flex;
                align-items: center;
                padding: 6px 12px;
                width: 160px;
                background: ${basisAlt['bg-muted']};
                border-radius: 6px;
            `}>
        {/* Searching Icon */}
        <Magnifier className={css`margin-right: 6px;`} />
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="搜索" 
          className={css`
            font-family: 'PingFang SC';
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: ${basis['text-subtle']};
            background: transparent;
            border: none;
            outline: none;
            width: 100%;
          `} 
        />
      </div>
      {/* Button */}
      <button
        className={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 6px 12px;
                    background-color: #67CDBC;
                    border-image-source: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 59.04%);
                    border-image-outset: 6px;
                    border-radius: 6px;
                    color: ${white};
                    font-family: 'PingFang SC';
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                    width: 80px;
                    height: 32px;
                    white-space: nowrap;
                    &:hover {
                      background-color: #5ab3a8;
                  }
                `}
        onClick={() => {
          console.log("分享体验 button clicked!");
        }}
      >
        分享体验
      </button>
    </div>
  );
};

export { SearchButton };
