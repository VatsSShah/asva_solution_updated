import React from "react";

const Footer = () => {
  return (
    <footer className="container sticky mx-auto mt-10 bg-white">
      <div className=" mx-auto px-4">
        <>
          <div className=" flex flex-col space-y-5 pb-3">
            <a href="/" className="text-xl my-1 mx-1 select-none font-bold">
              <svg
                className="cursor-pointer"
                width="198"
                height="45"
                viewBox="0 50 550 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 78.6534L28.9572 40.6681M41.1822 16.2178L73.9278 78.6534"
                  stroke="#6322D8"
                  stroke-width="14.8448"
                  stroke-linecap="round"
                />
                <path
                  d="M8 78.6534L28.9572 40.6681M41.1822 16.2178L73.9278 78.6534"
                  stroke="#6322D8"
                  stroke-width="14.8448"
                  stroke-linecap="round"
                />
                <ellipse
                  cx="40.7446"
                  cy="65.9908"
                  rx="7.42234"
                  ry="7.42242"
                  fill="black"
                />
                <path
                  d="M106.194 82.3413C104.741 82.3413 103.204 82.1736 101.583 81.8383C99.9626 81.5589 98.3978 81.1397 96.8889 80.5809C95.3799 79.9661 94.0666 79.2675 92.9489 78.4851C91.8871 77.6468 91.2164 76.7247 90.937 75.7188C90.7135 75.1599 90.6296 74.629 90.6855 74.126C90.7414 73.5671 90.9091 73.0083 91.1885 72.4494C91.4679 71.8347 91.8871 71.2199 92.4459 70.6052C92.9489 69.9904 93.4519 69.6551 93.9548 69.5992C94.5137 69.4875 95.2123 69.6551 96.0506 70.1022C96.7771 70.3816 97.5595 70.7449 98.3978 71.192C99.292 71.6391 100.186 72.0862 101.08 72.5333C102.03 72.9803 102.98 73.3436 103.931 73.623C104.936 73.9025 105.914 74.0422 106.865 74.0422C108.932 74.0422 110.581 73.7069 111.81 73.0362C113.04 72.3097 113.655 71.3038 113.655 70.0184C113.655 69.2919 113.459 68.6492 113.068 68.0903C112.677 67.5314 112.146 67.0844 111.475 66.749C110.86 66.3578 110.106 66.0225 109.212 65.7431C108.373 65.4078 107.451 65.1283 106.445 64.9048C105.495 64.6254 104.489 64.318 103.428 63.9827C102.03 63.5915 100.633 63.1164 99.2361 62.5576C97.8389 61.9987 96.5815 61.2722 95.4638 60.378C94.4019 59.4838 93.5357 58.3661 92.8651 57.0248C92.1944 55.6836 91.8591 54.007 91.8591 51.9951C91.8591 49.4802 92.4459 47.3565 93.6195 45.6241C94.849 43.8357 96.6094 42.4665 98.9008 41.5164C101.192 40.5664 103.958 40.0913 107.2 40.0913C108.318 40.0913 109.379 40.1752 110.385 40.3428C111.447 40.5105 112.453 40.762 113.403 41.0973C114.409 41.3767 115.359 41.74 116.253 42.1871C117.203 42.6342 118.098 43.1371 118.936 43.696C120.333 44.4784 121.06 45.4005 121.116 46.4624C121.171 47.4683 120.78 48.5581 119.942 49.7317C119.327 50.5141 118.712 51.073 118.098 51.4083C117.483 51.6877 116.84 51.6877 116.17 51.4083C115.275 50.9612 114.297 50.4862 113.236 49.9832C112.23 49.4243 111.168 48.9493 110.05 48.5581C108.988 48.1669 107.87 47.9713 106.697 47.9713C105.579 47.9713 104.573 48.139 103.679 48.4743C102.785 48.8096 102.114 49.2846 101.667 49.8994C101.22 50.5141 100.997 51.2406 100.997 52.0789C100.997 52.8613 101.22 53.504 101.667 54.007C102.114 54.51 102.701 54.9291 103.428 55.2644C104.154 55.5998 105.02 55.9071 106.026 56.1866C107.032 56.4101 108.094 56.6336 109.212 56.8572C110.777 57.1925 112.369 57.6117 113.99 58.1146C115.611 58.6176 117.092 59.3162 118.433 60.2104C119.83 61.1045 120.948 62.3061 121.786 63.815C122.624 65.2681 123.044 67.1682 123.044 69.5154C123.044 73.5951 121.535 76.7527 118.517 78.9881C115.555 81.2235 111.447 82.3413 106.194 82.3413ZM145.673 82.006C144.499 82.006 143.521 81.8103 142.739 81.4191C141.956 81.0279 141.342 80.3853 140.895 79.4911L125.638 47.5521C124.799 45.8756 124.576 44.5343 124.967 43.5283C125.358 42.5224 126.364 41.6282 127.985 40.8458C129.662 40.0075 131.003 39.7281 132.009 40.0075C133.015 40.2869 133.909 41.3208 134.691 43.1092L145.673 68.8448L156.487 43.6122C157.269 41.7679 158.163 40.6223 159.169 40.1752C160.175 39.6722 161.628 39.8957 163.529 40.8458C165.429 41.7959 166.435 42.8577 166.546 44.0313C166.658 45.149 166.351 46.4344 165.624 47.8875L150.451 79.4911C150.004 80.3294 149.389 80.9441 148.607 81.3353C147.824 81.7824 146.846 82.006 145.673 82.006ZM204.164 81.6706C202.543 81.6706 201.342 81.3633 200.559 80.7485C199.777 80.1338 199.386 79.2955 199.386 78.2336L199.973 75.4673C199.526 76.1938 198.771 77.06 197.709 78.066C196.647 79.016 195.25 79.8823 193.518 80.6647C191.785 81.3912 189.69 81.7545 187.231 81.7545C184.604 81.7545 182.117 81.2235 179.77 80.1617C177.478 79.044 175.439 77.5351 173.65 75.6349C171.918 73.6789 170.521 71.4714 169.459 69.0124C168.453 66.4975 167.95 63.815 167.95 60.9648C167.95 58.2264 168.453 55.6556 169.459 53.2525C170.521 50.7935 171.946 48.614 173.734 46.7139C175.522 44.8137 177.562 43.3327 179.854 42.2709C182.201 41.1532 184.66 40.5943 187.231 40.5943C189.522 40.5943 191.45 40.9017 193.015 41.5164C194.635 42.1312 196.005 42.9136 197.122 43.8637C198.24 44.7578 199.162 45.7079 199.889 46.7139L199.386 44.2828C199.386 43.0533 199.777 42.1312 200.559 41.5164C201.342 40.8458 202.571 40.5105 204.248 40.5105C205.813 40.5105 206.93 40.762 207.601 41.265C208.272 41.712 208.691 42.3547 208.858 43.193C209.026 43.9754 209.11 44.8696 209.11 45.8756V76.5571C209.11 77.5071 209.026 78.3734 208.858 79.1558C208.691 79.9382 208.244 80.5529 207.517 81C206.847 81.4471 205.729 81.6706 204.164 81.6706ZM188.739 71.9464C190.64 71.9464 192.344 71.4714 193.853 70.5213C195.362 69.5713 196.564 68.2859 197.458 66.6652C198.408 64.9886 198.883 63.1444 198.883 61.1325C198.883 58.9529 198.408 57.0528 197.458 55.4321C196.508 53.8114 195.25 52.554 193.685 51.6598C192.176 50.7097 190.472 50.2347 188.572 50.2347C186.504 50.2347 184.66 50.7377 183.039 51.7436C181.418 52.6937 180.133 54.007 179.183 55.6836C178.289 57.3043 177.842 59.1485 177.842 61.2163C177.842 63.2282 178.317 65.0445 179.267 66.6652C180.217 68.2859 181.502 69.5713 183.123 70.5213C184.8 71.4714 186.672 71.9464 188.739 71.9464ZM269.001 81.6706C267.38 81.6706 266.178 81.3633 265.396 80.7485C264.614 80.1338 264.222 79.2955 264.222 78.2336L264.809 75.4673C264.362 76.1938 263.608 77.06 262.546 78.066C261.484 79.016 260.087 79.8823 258.354 80.6647C256.622 81.3912 254.526 81.7545 252.067 81.7545C249.441 81.7545 246.954 81.2235 244.606 80.1617C242.315 79.044 240.275 77.5351 238.487 75.6349C236.754 73.6789 235.357 71.4714 234.295 69.0124C233.289 66.4975 232.786 63.815 232.786 60.9648C232.786 58.2264 233.289 55.6556 234.295 53.2525C235.357 50.7935 236.782 48.614 238.571 46.7139C240.359 44.8137 242.399 43.3327 244.69 42.2709C247.037 41.1532 249.496 40.5943 252.067 40.5943C254.359 40.5943 256.287 40.9017 257.851 41.5164C259.472 42.1312 260.841 42.9136 261.959 43.8637C263.077 44.7578 263.999 45.7079 264.725 46.7139L264.222 44.2828C264.222 43.0533 264.614 42.1312 265.396 41.5164C266.178 40.8458 267.408 40.5105 269.085 40.5105C270.649 40.5105 271.767 40.762 272.438 41.265C273.108 41.712 273.527 42.3547 273.695 43.193C273.863 43.9754 273.947 44.8696 273.947 45.8756V76.5571C273.947 77.5071 273.863 78.3734 273.695 79.1558C273.527 79.9382 273.08 80.5529 272.354 81C271.683 81.4471 270.566 81.6706 269.001 81.6706ZM253.576 71.9464C255.476 71.9464 257.181 71.4714 258.69 70.5213C260.199 69.5713 261.4 68.2859 262.294 66.6652C263.244 64.9886 263.719 63.1444 263.719 61.1325C263.719 58.9529 263.244 57.0528 262.294 55.4321C261.344 53.8114 260.087 52.554 258.522 51.6598C257.013 50.7097 255.309 50.2347 253.408 50.2347C251.341 50.2347 249.496 50.7377 247.876 51.7436C246.255 52.6937 244.97 54.007 244.02 55.6836C243.125 57.3043 242.678 59.1485 242.678 61.2163C242.678 63.2282 243.153 65.0445 244.103 66.6652C245.053 68.2859 246.339 69.5713 247.96 70.5213C249.636 71.4714 251.508 71.9464 253.576 71.9464ZM287.723 81.8383C286.214 81.8383 285.096 81.5868 284.37 81.0838C283.643 80.6367 283.196 80.0499 283.028 79.3234C282.861 78.541 282.777 77.6748 282.777 76.7247V45.5402C282.777 44.6461 282.861 43.8357 283.028 43.1092C283.252 42.3268 283.699 41.712 284.37 41.265C285.096 40.8179 286.242 40.5943 287.807 40.5943C289.371 40.5943 290.489 40.8179 291.16 41.265C291.886 41.712 292.333 42.3268 292.501 43.1092C292.669 43.8916 292.753 44.7578 292.753 45.7079V76.8085C292.753 77.7586 292.669 78.6248 292.501 79.4072C292.333 80.1338 291.886 80.7206 291.16 81.1677C290.489 81.6147 289.343 81.8383 287.723 81.8383ZM287.723 32.4629C286.102 32.4629 284.901 32.2393 284.118 31.7923C283.392 31.2893 282.917 30.6186 282.693 29.7804C282.525 28.9421 282.442 28.0199 282.442 27.014C282.442 25.9522 282.525 25.03 282.693 24.2476C282.917 23.4652 283.42 22.8505 284.202 22.4034C284.984 21.9004 286.186 21.6489 287.807 21.6489C289.483 21.6489 290.685 21.9004 291.411 22.4034C292.138 22.9064 292.613 23.577 292.836 24.4153C293.06 25.1977 293.172 26.1198 293.172 27.1817C293.172 28.1317 293.06 29.0259 292.836 29.8642C292.613 30.7025 292.138 31.3452 291.411 31.7923C290.685 32.2393 289.455 32.4629 287.723 32.4629Z"
                  fill="black"
                />
                <path
                  d="M222.132 81.8383C220.064 81.8383 218.611 81.4471 217.773 80.6647C216.934 79.8264 216.515 78.3734 216.515 76.3056C216.515 74.8525 216.683 73.7348 217.018 72.9524C217.409 72.1141 218.024 71.4994 218.862 71.1082C219.701 70.717 220.818 70.5213 222.215 70.5213C224.283 70.5213 225.736 70.9405 226.575 71.7788C227.413 72.6171 227.832 74.0981 227.832 76.2217C227.832 77.6189 227.636 78.7366 227.245 79.5749C226.91 80.4132 226.323 81 225.485 81.3353C224.702 81.6706 223.585 81.8383 222.132 81.8383Z"
                  fill="#6322D8"
                />
                <path
                  d="M60.8578 106.415C60.8578 107.309 60.5495 108.054 59.933 108.65C59.3267 109.235 58.3968 109.528 57.1431 109.528H55.0777V114.014H53.6751V103.27H57.1431C58.3557 103.27 59.2753 103.563 59.9022 104.149C60.5392 104.735 60.8578 105.49 60.8578 106.415ZM57.1431 108.372C57.9241 108.372 58.4995 108.203 58.8695 107.864C59.2394 107.525 59.4243 107.042 59.4243 106.415C59.4243 105.089 58.6639 104.426 57.1431 104.426H55.0777V108.372H57.1431ZM71.3251 114.122C70.3284 114.122 69.419 113.89 68.5969 113.428C67.7749 112.955 67.1224 112.303 66.6394 111.47C66.1667 110.628 65.9304 109.682 65.9304 108.634C65.9304 107.586 66.1667 106.646 66.6394 105.814C67.1224 104.971 67.7749 104.319 68.5969 103.856C69.419 103.384 70.3284 103.147 71.3251 103.147C72.3321 103.147 73.2466 103.384 74.0687 103.856C74.8907 104.319 75.5381 104.966 76.0108 105.798C76.4835 106.631 76.7198 107.576 76.7198 108.634C76.7198 109.693 76.4835 110.638 76.0108 111.47C75.5381 112.303 74.8907 112.955 74.0687 113.428C73.2466 113.89 72.3321 114.122 71.3251 114.122ZM71.3251 112.904C72.0752 112.904 72.7483 112.729 73.3443 112.38C73.9505 112.03 74.4232 111.532 74.7623 110.885C75.1117 110.237 75.2864 109.487 75.2864 108.634C75.2864 107.771 75.1117 107.021 74.7623 106.384C74.4232 105.737 73.9557 105.238 73.3597 104.889C72.7637 104.54 72.0855 104.365 71.3251 104.365C70.5647 104.365 69.8865 104.54 69.2905 104.889C68.6945 105.238 68.2219 105.737 67.8725 106.384C67.5334 107.021 67.3638 107.771 67.3638 108.634C67.3638 109.487 67.5334 110.237 67.8725 110.885C68.2219 111.532 68.6945 112.03 69.2905 112.38C69.8968 112.729 70.575 112.904 71.3251 112.904ZM95.927 103.27L92.8135 114.014H91.2413L88.7444 105.367L86.1549 114.014L84.5981 114.029L81.5925 103.27H83.0876L85.4305 112.38L88.0199 103.27H89.5921L92.0582 112.349L94.4165 103.27H95.927ZM102.718 104.411V108.002H106.633V109.158H102.718V112.858H107.095V114.014H101.315V103.255H107.095V104.411H102.718ZM118.728 114.014L116.169 109.621H114.474V114.014H113.071V103.27H116.539C117.351 103.27 118.034 103.409 118.589 103.687C119.154 103.964 119.576 104.339 119.853 104.812C120.13 105.285 120.269 105.824 120.269 106.43C120.269 107.17 120.053 107.823 119.622 108.388C119.201 108.953 118.563 109.328 117.711 109.513L120.408 114.014H118.728ZM114.474 108.496H116.539C117.3 108.496 117.87 108.311 118.25 107.941C118.63 107.561 118.82 107.057 118.82 106.43C118.82 105.793 118.63 105.3 118.25 104.951C117.88 104.601 117.31 104.426 116.539 104.426H114.474V108.496ZM140.877 103.27V104.411H137.948V114.014H136.546V104.411H133.602V103.27H140.877ZM154.734 103.27V114.014H153.331V109.143H147.86V114.014H146.457V103.27H147.86V107.987H153.331V103.27H154.734ZM162.385 104.411V108.002H166.3V109.158H162.385V112.858H166.762V114.014H160.982V103.255H166.762V104.411H162.385ZM186.774 103.27V104.411H182.103V108.033H185.895V109.174H182.103V114.014H180.701V103.27H186.774ZM193.693 103.27V110.068C193.693 111.023 193.924 111.732 194.386 112.195C194.859 112.657 195.512 112.888 196.344 112.888C197.166 112.888 197.808 112.657 198.271 112.195C198.743 111.732 198.98 111.023 198.98 110.068V103.27H200.382V110.052C200.382 110.946 200.202 111.702 199.843 112.318C199.483 112.924 198.995 113.377 198.378 113.675C197.772 113.973 197.089 114.122 196.329 114.122C195.568 114.122 194.88 113.973 194.263 113.675C193.657 113.377 193.174 112.924 192.814 112.318C192.465 111.702 192.29 110.946 192.29 110.052V103.27H193.693ZM213.188 103.27V104.411H210.259V114.014H208.857V104.411H205.913V103.27H213.188ZM220.14 103.27V110.068C220.14 111.023 220.371 111.732 220.833 112.195C221.306 112.657 221.958 112.888 222.791 112.888C223.613 112.888 224.255 112.657 224.717 112.195C225.19 111.732 225.426 111.023 225.426 110.068V103.27H226.829V110.052C226.829 110.946 226.649 111.702 226.29 112.318C225.93 112.924 225.442 113.377 224.825 113.675C224.219 113.973 223.536 114.122 222.775 114.122C222.015 114.122 221.326 113.973 220.71 113.675C220.104 113.377 219.621 112.924 219.261 112.318C218.912 111.702 218.737 110.946 218.737 110.052V103.27H220.14ZM238.679 114.014L236.12 109.621H234.425V114.014H233.022V103.27H236.49C237.302 103.27 237.985 103.409 238.54 103.687C239.105 103.964 239.527 104.339 239.804 104.812C240.082 105.285 240.22 105.824 240.22 106.43C240.22 107.17 240.004 107.823 239.573 108.388C239.152 108.953 238.515 109.328 237.662 109.513L240.359 114.014H238.679ZM234.425 108.496H236.49C237.251 108.496 237.821 108.311 238.201 107.941C238.581 107.561 238.771 107.057 238.771 106.43C238.771 105.793 238.581 105.3 238.201 104.951C237.831 104.601 237.261 104.426 236.49 104.426H234.425V108.496ZM247.656 104.411V108.002H251.571V109.158H247.656V112.858H252.033V114.014H246.253V103.255H252.033V104.411H247.656Z"
                  fill="#3C245B"
                />
              </svg>
            </a>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col justify-between items-center">

              {/* <p className="text-lg text-gray-500 font-semibold">
                Match the Ideal AI model for any prompt
              </p> */}
              <p className="text-lg text-gray-500 font-semibold">
                ASVA AI <br/> 

                BHIVE Premium HSR Campus <br/> 

                B-Block, No.112, AKR Tech Park, "A" <br/> 
                7th Mile Hosur Rd,  <br/> 
                Bengaluru, Karnataka 560068 
              </p>
              </div>
              <div className="flex flex-row justify-between items-center gap-x-3">
                <a
                  href="#"
                  className=" flex justify-center items-center fill-purple-700 hover:bg-gray-100 hover:fill-purple-500 transition-all duration-150 px-4 bg-gray-300 py-3 rounded-xl "
                >
                  <svg
                    width="25px"
                    height="25px"
                    fill="inherit"
                    viewBox="0 -28.5 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                        fill="inherit"
                        fill-rule="nonzero"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://x.com/ai_asva"
                  className=" flex justify-center items-center fill-purple-700 hover:bg-gray-100 hover:fill-purple-500 transition-all duration-150 px-4 bg-gray-300 py-3 rounded-xl "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    fill="inherit"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    viewBox="0 0 512 462.799"
                  >
                    <path
                      fill-rule="nonzero"
                      d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                    />
                  </svg>
                </a>
                <a
                  href=" https://www.youtube.com/@ASVA_AI"
                  className=" flex justify-center items-center fill-purple-700 hover:bg-gray-100 hover:fill-purple-500 transition-all duration-150 px-4 bg-gray-300 py-3 rounded-xl "
                >
                  <svg
                    width="25px"
                    height="25px"
                    fill="inherit"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 461.001 461.001"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        fill="inherit"
                        d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/asva-ai/"
                  className=" flex justify-center items-center fill-purple-700 hover:bg-gray-100 hover:fill-purple-500 transition-all duration-150 px-4 bg-gray-300 py-3 rounded-xl "
                >
                  <svg
                    width="25px"
                    height="25px"
                    fill="inherit"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 310 310"
                    xml:space="preserve"
                  >
                    <g id="XMLID_801_">
                      <path
                        id="XMLID_802_"
                        d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                      />
                      <path
                        id="XMLID_803_"
                        d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                      />
                      <path
                        id="XMLID_804_"
                        d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            
          </div>
        </>
        <div className="container bg-white py-10 ">
          <div className="hidden grid-cols-2 md:grid-cols-6 border-b border-b-gray-200 mx-auto">
            <div className="px-4 w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">General</h3>
              <ul className="text-gray-400 cursor-pointer font-medium flex flex-col space-y-3">
                <a href="#">Product</a>
                <a href="#">Testimonial</a>
                <a href="#">Contact us</a>
                <a href="#">Links</a>
              </ul>
            </div>
            <div className="px-4 mb-6">
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="text-gray-400 cursor-pointer font-medium flex flex-col space-y-3">
                <a href="#">Interface</a>
                <a href="#">Fine-tuning</a>
                <a href="#">Hosting</a>
                <a href="#">Monitoring</a>
              </ul>
            </div>
            <div className="px-4 mb-6">
              <h3 className="text-lg font-bold mb-4">Pricing</h3>
              <ul className="text-gray-400 cursor-pointer font-medium flex flex-col space-y-3">
                <a href="#">Fine-tuning Costs</a>
                <a href="#">Dedicated Dep...</a>
                <a href="#">Asva Tiers</a>
              </ul>
            </div>
            <div className="px-4 mb-6">
              <h3 className="text-lg font-bold mb-4">Blogs</h3>
              <ul className="text-gray-400 cursor-pointer font-medium flex flex-col space-y-3">
                <a href="#">Case studies</a>
                <a href="#">Use cases</a>
              </ul>
            </div>
            <div className="px-4 mb-6">
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="text-gray-400 cursor-pointer font-medium flex flex-col space-y-3">
                <a href="#">Story</a>
                <a href="#">Hiring</a>
              </ul>
            </div>
            <div className="px-4 mb-6">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="text-gray-400 cursor-pointer font-medium flex flex-col space-y-3">
                <a href="#">Email</a>
              </ul>
            </div>
          </div>
          <div className="flex flex-row space-x-10 border-t border-t-gray-400 py-5  justify-between text-gray-300 font-semibold md:text-lg text-sm mx-auto items-center">
            <p className="text-gray-600">
              &copy; 2024 RAPIDBIZZ TECHNOLOGIES PRIVATE LIMITED.
            </p>
            <div className="flex items-center">
              <a href="https://policy.asvaai.com/" className="text-gray-600 hover:text-blue-500 mr-4">
                Privacy Policy
              </a>
              <a href="https://tnc.asvaai.com/" className="text-gray-600 hover:text-blue-500 mr-4">
                Terms and condition
              </a>
              <button className="md:relative md:flex hidden">
                <select className="appearance-none bg-transparent border-none py-2 px-4  mx-7 text-gray-600 focus:outline-none">
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  {/* Add more language options */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;