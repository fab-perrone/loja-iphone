import React from 'react';

interface IphoneDeviceVisualProps {
  modelName: string;
  isPro?: boolean;
  colorHex: string;
  colorName: string;
  size?: 'sm' | 'md' | 'lg';
  showBack?: boolean;
}

export const IphoneDeviceVisual: React.FC<IphoneDeviceVisualProps> = ({
  isPro = false,
  colorHex,
  colorName,
  size = 'md',
  showBack = true,
}) => {
  const sizeStyles = {
    sm: 'w-44 h-72',
    md: 'w-56 h-[340px]',
    lg: 'w-72 h-[440px]',
  }[size];

  // Derive subtle complementary highlights from hex
  const isLight = colorHex.toLowerCase() === '#ffffff' || colorHex.toLowerCase() === '#f3f4f6' || colorHex.toLowerCase() === '#e3e4e5' || colorHex.toLowerCase() === '#efece6' || colorHex.toLowerCase() === '#f0ebe3';

  return (
    <div className={`relative ${sizeStyles} mx-auto flex items-center justify-center select-none group`}>
      {/* Outer ambient glow based on device color */}
      <div
        className="absolute inset-4 rounded-[40px] blur-2xl opacity-25 transition-colors duration-500 pointer-events-none"
        style={{ backgroundColor: colorHex }}
      />

      {/* Device Outer Chassis / Frame */}
      <div
        className="relative w-full h-full rounded-[44px] p-[3px] shadow-2xl transition-all duration-500 ease-out group-hover:scale-[1.02]"
        style={{
          background: `linear-gradient(135deg, ${colorHex}dd, #18181b 45%, ${colorHex}bb 80%, #09090b)`,
          boxShadow: `0 20px 40px -15px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1) inset`,
        }}
      >
        {/* Antenna bands and volume buttons subtle indicators on sides */}
        <div className="absolute -left-[3px] top-20 w-[3px] h-9 bg-zinc-600/60 rounded-l-sm" />
        <div className="absolute -left-[3px] top-32 w-[3px] h-9 bg-zinc-600/60 rounded-l-sm" />
        <div className="absolute -right-[3px] top-24 w-[3px] h-12 bg-zinc-600/60 rounded-r-sm" />

        {/* Backplate surface */}
        {showBack ? (
          <div
            className="relative w-full h-full rounded-[41px] overflow-hidden flex flex-col items-center justify-between p-6 transition-colors duration-500"
            style={{
              backgroundColor: colorHex,
              backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0.2) 80%)`,
            }}
          >
            {/* Matte glass reflection sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none" />

            {/* Camera Bump Module */}
            <div className="self-start relative">
              <div
                className={`relative rounded-[28px] p-2.5 backdrop-blur-md shadow-xl border ${
                  isPro ? 'w-[104px] h-[108px]' : 'w-[52px] h-[98px]'
                }`}
                style={{
                  backgroundColor: `${colorHex}cc`,
                  borderColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 8px 18px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.2)',
                }}
              >
                {isPro ? (
                  /* Pro Triple Camera Layout */
                  <div className="relative w-full h-full">
                    {/* Top lens */}
                    <div className="absolute top-0 left-0 w-10 h-10 rounded-full bg-zinc-950 p-1 border border-zinc-700/60 shadow-inner flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-900 to-black p-1 relative flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-sky-950 via-zinc-900 to-indigo-950 border border-sky-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-sky-300/40 blur-[0.5px]" />
                        </div>
                        <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-white/40" />
                      </div>
                    </div>

                    {/* Bottom lens */}
                    <div className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-zinc-950 p-1 border border-zinc-700/60 shadow-inner flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-900 to-black p-1 relative flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-sky-950 via-zinc-900 to-indigo-950 border border-sky-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-sky-300/40 blur-[0.5px]" />
                        </div>
                        <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-white/40" />
                      </div>
                    </div>

                    {/* Right lens */}
                    <div className="absolute top-6 right-0 w-10 h-10 rounded-full bg-zinc-950 p-1 border border-zinc-700/60 shadow-inner flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-900 to-black p-1 relative flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-sky-950 via-zinc-900 to-indigo-950 border border-sky-400/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-sky-300/40 blur-[0.5px]" />
                        </div>
                        <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-white/40" />
                      </div>
                    </div>

                    {/* Flash */}
                    <div className="absolute top-1 right-2.5 w-4 h-4 rounded-full bg-amber-100/90 border border-amber-300 shadow-sm flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-amber-200" />
                    </div>

                    {/* LiDAR sensor */}
                    <div className="absolute bottom-1 right-3 w-3 h-3 rounded-full bg-zinc-950 border border-zinc-700 shadow-inner" />

                    {/* Microphone hole */}
                    <div className="absolute bottom-6 right-0.5 w-1.5 h-1.5 rounded-full bg-zinc-950" />
                  </div>
                ) : (
                  /* Standard Dual Camera (vertical array) */
                  <div className="relative w-full h-full flex flex-col justify-between items-center py-0.5">
                    {/* Upper Lens */}
                    <div className="w-8 h-8 rounded-full bg-zinc-950 p-0.5 border border-zinc-700/50 shadow-inner flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-zinc-900 to-black p-1 relative flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-sky-950 to-zinc-900 border border-sky-400/20 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-300/40" />
                        </div>
                        <div className="absolute top-1 left-1.5 w-1 h-1 rounded-full bg-white/40" />
                      </div>
                    </div>

                    {/* Lower Lens */}
                    <div className="w-8 h-8 rounded-full bg-zinc-950 p-0.5 border border-zinc-700/50 shadow-inner flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-zinc-900 to-black p-1 relative flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-sky-950 to-zinc-900 border border-sky-400/20 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-300/40" />
                        </div>
                        <div className="absolute top-1 left-1.5 w-1 h-1 rounded-full bg-white/40" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Apple Center Logo */}
            <div className="my-auto opacity-75 drop-shadow">
              <svg
                className={`w-7 h-7 ${isLight ? 'text-zinc-700 fill-zinc-700' : 'text-white/80 fill-white/80'}`}
                viewBox="0 0 170 170"
                fill="currentColor"
              >
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.85-11.7-14.42-6.09-9.78-10.74-20.76-13.97-32.93-3.23-12.17-4.84-23.77-4.84-34.8 0-14.56 3.63-26.68 10.88-36.37 7.26-9.69 16.48-14.65 27.67-14.88 4.88 0 10.37 1.34 16.47 4.01 6.1 2.67 10.15 4.06 12.16 4.17 1.74 0 5.86-1.45 12.37-4.34 6.51-2.9 12.25-4.14 17.21-3.73 13.04 1.07 23.36 6.3 30.95 15.69-11.51 6.94-17.15 16.71-16.92 29.31.23 9.9 4.09 18.23 11.58 24.99 7.49 6.76 16.27 10.72 26.33 11.89-2.03 6.09-4.43 12.01-7.2 17.76zM119.22 33.56c0-6.72 2.39-13.3 7.16-19.74 4.77-6.44 10.84-11.08 18.2-13.92.35 1.57.53 3.09.53 4.56 0 6.64-2.5 13.25-7.51 19.82-5.01 6.57-11.14 11.16-18.38 13.78z" />
              </svg>
            </div>

            {/* Subtle Regulatory engraving / MagSafe hint */}
            <div className="text-[9px] tracking-widest uppercase opacity-40 font-mono">
              iPhone · {colorName}
            </div>
          </div>
        ) : (
          /* Screen View with Dynamic Island */
          <div className="relative w-full h-full rounded-[41px] bg-black overflow-hidden flex flex-col justify-between p-4 border border-zinc-800">
            {/* Dynamic Island */}
            <div className="mx-auto mt-1 w-24 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-between px-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700/50 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-sky-500/30" />
              </div>
              <div className="w-2 h-2 rounded-full bg-zinc-900" />
            </div>

            {/* iOS Lockscreen Elements */}
            <div className="my-auto text-center space-y-1">
              <div className="text-[11px] font-medium text-zinc-400">Segunda-feira, 24 de setembro</div>
              <div className="text-4xl font-semibold tracking-tight text-white font-mono tabular-nums">09:41</div>
            </div>

            {/* Home indicator */}
            <div className="mx-auto w-28 h-1 rounded-full bg-white/40 mb-1" />
          </div>
        )}
      </div>
    </div>
  );
};
