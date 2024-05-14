import { memo } from 'react';

function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? '🔈' : '🔇'}
    </button>
  );
}

//! Memoized the component so that it doesnt render when its parent rerenders as long as the props stay the same between renders
export default memo(ToggleSounds);
