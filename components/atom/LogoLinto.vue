<template>
    <div class="logo-linto">
        <div class="eye left" />
        <div class="eye right" />
        <div class="mouth" />
    </div>
</template>

<style scoped>

.logo-linto {
    --bubble-size: 24px;
      --bubble-color: #29a7e1;   
      --face-color: #000;        
      position: relative;
      width: var(--bubble-size);
      height: var(--bubble-size);
      background: var(--bubble-color);
      border-radius: 50%;
      overflow: visible; /* laisse la queue sortir */
    }

    .logo-linto .eye {
      position: absolute;
      width: 19%;
      height: 19%;
      background: var(--face-color);
      border-radius: 50%;
      top: 35%;
    }
    .logo-linto .eye.left  { left: 24%; }
    .logo-linto .eye.right { right: 24%; }

    .logo-linto .mouth {
      position: absolute;
      width: 34%;
      height: 14%;
      background: var(--face-color);
      border-radius: 0 0 50% 50% / 0 0 100% 100%;
      bottom: 30%;
      left: 33%;
      transform-origin: center center;
      animation: talk 4s ease-in-out infinite;
    }

    @keyframes talk {
      0%, 100% { transform: translateX(-10%) rotate(-12deg) scaleY(0.85); }
      15%      { transform: translateX(0) rotate(0deg) scaleY(0.7); }
      25%,45%  { transform: translateX(0) rotate(0deg) scaleY(1.5); }
      35%,55%  { transform: translateX(0) rotate(0deg) scaleY(0.7); }
      75%      { transform: translateX(-10%) rotate(-12deg) scaleY(0.85); }
    }
</style>
