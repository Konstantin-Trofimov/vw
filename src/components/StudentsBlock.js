class StudentsBlock extends HTMLElement {
    constructor() {
        super()
        this.render()
        
    }

    render() {
        this.innerHTML = 

        `<div id="students" class="students block">
            <svg class="block-bg" viewBox="0 0 795 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M793 35.1957V151.125V152.147L776.5 169L581.5 169L573 160.318H534L526 169L302.5 169L289 154.7L63 154.7L51.5 166.957H17.5L2 151.125V30.5994L21 11.7034L372 11.7034L381.5 2L423.5 2L433 11.7034L770 11.7034L793 35.1957Z"
                    fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.9"
                    stroke-width="3" />
                <path d="M35.619 155H18L20.381 157H38L35.619 155Z" fill="#223E9E" />
                <path d="M31.619 151H14L16.381 153H34L31.619 151Z" fill="#223E9E" />
                <path d="M35.5 155H27L29.5 157H38L35.5 155Z" fill="#217AFF" />
                <path d="M31.5 151H19L21.5 153H34L31.5 151Z" fill="#217AFF" />
            </svg>

            <div class="students__wrap">
                <div class="students__item students__employment">
                    <div class="students__title">Трудоустройство <br /> выпускников</div>

                    <div class="students__employment-wrap">

                        <svg class="students__employment-diagram" width="92%" height="92%"
                            viewBox="0 0 444 444" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M443.15 226.45L393.92 225.39C393.95 224.13 393.96 222.87 393.96 221.6C393.96 220.33 393.95 219.07 393.92 217.81L443.15 216.75C443.18 218.36 443.2 219.98 443.2 221.6C443.2 223.22 443.18 224.84 443.15 226.45Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M442.73 207.09L393.59 210.27C393.43 207.75 393.21 205.25 392.94 202.77L441.9 197.47C442.24 200.65 442.52 203.86 442.73 207.09Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M440.65 187.88L391.97 195.31C391.59 192.82 391.16 190.35 390.67 187.91L438.98 178.35C439.6 181.5 440.16 184.68 440.65 187.88Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M436.9 168.91L389.06 180.58C388.47 178.14 387.82 175.73 387.12 173.33L434.4 159.57C435.3 162.65 436.13 165.77 436.9 168.91Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M431.49 150.34L384.86 166.17C384.05 163.8 383.2 161.45 382.29 159.12L428.18 141.26C429.35 144.25 430.45 147.28 431.49 150.34Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M424.48 132.33L379.42 152.19C378.41 149.9 377.35 147.63 376.24 145.39L420.39 123.58C421.82 126.45 423.18 129.37 424.48 132.33Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M415.92 114.99L372.77 138.71C371.56 136.51 370.31 134.34 369.01 132.2L411.09 106.61C412.75 109.38 414.36 112.17 415.92 114.99Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M405.87 98.48L364.95 125.88C363.55 123.79 362.11 121.74 360.63 119.72L400.32 90.57C402.23 93.16 404.08 95.79 405.87 98.48Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M394.43 82.89L356.04 113.74C354.47 111.78 352.85 109.86 351.2 107.97L388.21 75.49C390.33 77.91 392.41 80.38 394.43 82.89Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M381.68 68.36L346.11 102.42C344.37 100.61 342.6 98.83 340.78 97.09L374.84 61.52C377.17 63.75 379.45 66.03 381.68 68.36Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M367.71 54.99C365.29 52.86 362.82 50.79 360.31 48.77L329.46 87.16C331.42 88.73 333.34 90.35 335.23 92L367.71 54.99Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M352.64 42.88L323.49 82.57C321.47 81.09 319.41 79.64 317.33 78.25L344.73 37.33C347.4 39.12 350.04 40.97 352.64 42.88Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M336.57 32.12L310.99 74.2C308.85 72.9 306.68 71.64 304.48 70.44L328.2 27.29C331.03 28.83 333.82 30.45 336.57 32.12Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M319.63 22.81L297.82 66.96C295.58 65.85 293.31 64.79 291.02 63.78L310.88 18.72C313.83 20.02 316.75 21.38 319.63 22.81Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M301.94 15.01L284.08 60.9C281.75 59.99 279.4 59.14 277.03 58.33L292.86 11.7C295.91 12.74 298.94 13.85 301.94 15.01Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M283.63 8.8L269.87 56.08C267.47 55.38 265.06 54.74 262.62 54.14L274.29 6.3C277.43 7.07 280.55 7.9 283.63 8.8Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M264.85 4.22L255.29 52.53C252.84 52.05 250.37 51.61 247.89 51.23L255.32 2.55C258.52 3.04 261.69 3.59 264.85 4.22Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M245.73 1.3L240.43 50.26C237.95 49.99 235.45 49.77 232.93 49.61L236.11 0.470001C239.33 0.680001 242.54 0.950001 245.73 1.3Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M226.45 0.05L225.39 49.28C224.13 49.25 222.87 49.24 221.6 49.24C220.33 49.24 219.07 49.25 217.81 49.28L216.75 0.05C218.36 0.02 219.98 0 221.6 0C223.22 0 224.84 0.02 226.45 0.05Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M207.09 0.470001L210.27 49.61C207.75 49.77 205.25 49.99 202.77 50.26L197.47 1.3C200.65 0.950001 203.86 0.680001 207.09 0.470001Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M187.88 2.55L195.31 51.23C192.82 51.61 190.35 52.04 187.91 52.53L178.35 4.22C181.5 3.59 184.68 3.04 187.88 2.55Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M168.91 6.3L180.58 54.14C178.14 54.73 175.73 55.38 173.33 56.08L159.56 8.8C162.65 7.9 165.77 7.07 168.91 6.3Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M150.34 11.71L166.17 58.34C163.8 59.15 161.45 60 159.12 60.91L141.26 15.02C144.25 13.85 147.28 12.74 150.34 11.71Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M132.33 18.72L152.19 63.78C149.9 64.79 147.63 65.85 145.39 66.96L123.58 22.81C126.45 21.38 129.37 20.02 132.33 18.72Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M114.99 27.28L138.71 70.43C136.51 71.64 134.34 72.89 132.2 74.19L106.61 32.11C109.38 30.45 112.17 28.83 114.99 27.28Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M98.4801 37.32L125.88 78.24C123.79 79.64 121.74 81.08 119.72 82.56L90.5601 42.88C93.1601 40.97 95.7901 39.12 98.4801 37.32Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M82.8902 48.77L113.74 87.16C111.78 88.73 109.86 90.35 107.97 92L75.4902 54.99C77.9102 52.86 80.3802 50.79 82.8902 48.77Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M68.36 61.52L102.42 97.09C100.61 98.83 98.83 100.6 97.09 102.42L61.52 68.36C63.75 66.03 66.03 63.75 68.36 61.52Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M54.99 75.49L92 107.97C90.34 109.86 88.73 111.78 87.16 113.74L48.77 82.89C50.79 80.38 52.86 77.91 54.99 75.49Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M42.8801 90.56L82.5701 119.71C81.0901 121.73 79.6401 123.79 78.2501 125.87L37.3301 98.47C39.1201 95.79 40.9701 93.16 42.8801 90.56Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M32.12 106.63L74.2 132.22C72.9 134.36 71.64 136.53 70.44 138.73L27.29 115.01C28.83 112.17 30.45 109.38 32.12 106.63Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22.8102 123.57L66.9602 145.38C65.8502 147.62 64.7902 149.89 63.7802 152.18L18.7202 132.32C20.0202 129.37 21.3802 126.45 22.8102 123.57Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.0102 141.26L60.9002 159.12C59.9902 161.45 59.1402 163.8 58.3302 166.17L11.7002 150.34C12.7402 147.28 13.8502 144.25 15.0102 141.26Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.7998 159.56L56.0798 173.32C55.3798 175.72 54.7398 178.13 54.1398 180.57L6.2998 168.91C7.0698 165.77 7.8998 162.65 8.7998 159.56Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.2198 178.35L52.5298 187.91C52.0498 190.36 51.6098 192.83 51.2298 195.31L2.5498 187.88C3.0398 184.68 3.5898 181.5 4.2198 178.35Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.30021 197.46L50.2602 202.76C49.9902 205.24 49.7702 207.74 49.6102 210.26L0.470215 207.08C0.680215 203.86 0.950215 200.65 1.30021 197.46Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.05 216.75C0.02 218.36 0 219.98 0 221.6C0 223.22 0.02 224.84 0.05 226.45L49.28 225.39C49.25 224.13 49.24 222.87 49.24 221.6C49.24 220.33 49.25 219.07 49.28 217.81L0.05 216.75Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.470215 236.11L49.6102 232.93C49.7702 235.45 49.9902 237.95 50.2602 240.43L1.30021 245.73C0.950215 242.55 0.680215 239.33 0.470215 236.11Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.5498 255.32L51.2298 247.89C51.6098 250.38 52.0398 252.85 52.5298 255.29L4.2198 264.85C3.5898 261.69 3.0398 258.52 2.5498 255.32Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.2998 274.29C7.0698 277.43 7.8998 280.55 8.7998 283.63L56.0798 269.87C55.3798 267.47 54.7398 265.06 54.1398 262.62L6.2998 274.29Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.71 292.86L58.34 277.03C59.15 279.4 60 281.75 60.91 284.08L15.02 301.94C13.85 298.94 12.74 295.91 11.71 292.86Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.7202 310.87L63.7802 291.01C64.7902 293.3 65.8502 295.57 66.9602 297.81L22.8102 319.62C21.3802 316.75 20.0202 313.83 18.7202 310.87Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M27.2798 328.2L70.4298 304.48C71.6398 306.68 72.8898 308.85 74.1898 310.99L32.1098 336.58C30.4498 333.82 28.8298 331.03 27.2798 328.2Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M37.3198 344.72L78.2398 317.32C79.6398 319.41 81.0798 321.46 82.5598 323.48L42.8698 352.63C40.9698 350.04 39.1198 347.4 37.3198 344.72Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M48.77 360.31L87.16 329.46C88.73 331.42 90.35 333.34 92 335.23L54.99 367.71C52.86 365.29 50.79 362.82 48.77 360.31Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M61.52 374.84L97.09 340.78C98.83 342.59 100.6 344.37 102.42 346.11L68.36 381.68C66.03 379.45 63.75 377.17 61.52 374.84Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M75.4902 388.21L107.97 351.2C109.86 352.86 111.78 354.47 113.74 356.04L82.8902 394.43C80.3802 392.41 77.9102 390.33 75.4902 388.21Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M90.5601 400.32L119.71 360.63C121.73 362.11 123.79 363.56 125.87 364.95L98.4701 405.87C95.7901 404.08 93.1601 402.23 90.5601 400.32Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M106.63 411.08L132.21 369C134.35 370.3 136.52 371.56 138.72 372.76L115 415.91C112.17 414.36 109.38 412.75 106.63 411.08Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M123.57 420.39L145.38 376.24C147.62 377.35 149.89 378.41 152.18 379.42L132.32 424.48C129.37 423.18 126.45 421.82 123.57 420.39Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M141.26 428.19L159.12 382.3C161.45 383.21 163.8 384.06 166.17 384.87L150.34 431.5C147.28 430.45 144.25 429.35 141.26 428.19Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M159.56 434.4L173.32 387.12C175.72 387.82 178.13 388.46 180.57 389.06L168.9 436.9C165.77 436.13 162.65 435.3 159.56 434.4Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M178.35 438.98L187.91 390.67C190.36 391.15 192.83 391.59 195.31 391.97L187.88 440.65C184.68 440.16 181.5 439.6 178.35 438.98Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M197.46 441.9L202.76 392.94C205.24 393.21 207.74 393.43 210.26 393.59L207.08 442.73C203.86 442.52 200.65 442.24 197.46 441.9Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M216.75 443.15L217.81 393.92C219.07 393.95 220.33 393.96 221.6 393.96C222.87 393.96 224.13 393.95 225.39 393.92L226.45 443.15C224.84 443.18 223.22 443.2 221.6 443.2C219.98 443.2 218.36 443.18 216.75 443.15Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M236.11 442.73L232.93 393.59C235.45 393.43 237.95 393.21 240.43 392.94L245.73 441.9C242.55 442.24 239.33 442.52 236.11 442.73Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M255.32 440.65L247.89 391.97C250.38 391.59 252.85 391.16 255.29 390.67L264.85 438.98C261.69 439.6 258.52 440.16 255.32 440.65Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M274.29 436.9L262.62 389.06C265.06 388.47 267.47 387.82 269.87 387.12L283.63 434.4C280.55 435.3 277.43 436.13 274.29 436.9Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M292.86 431.49L277.03 384.86C279.4 384.05 281.75 383.2 284.08 382.29L301.94 428.18C298.94 429.35 295.91 430.45 292.86 431.49Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M310.87 424.48L291.01 379.42C293.3 378.41 295.57 377.35 297.81 376.24L319.62 420.39C316.75 421.82 313.83 423.18 310.87 424.48Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M328.2 415.92L304.48 372.77C306.68 371.56 308.85 370.31 310.99 369.01L336.58 411.09C333.82 412.75 331.03 414.36 328.2 415.92Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M344.72 405.87C347.4 404.08 350.04 402.22 352.64 400.32L323.49 360.63C321.47 362.11 319.41 363.56 317.33 364.95L344.72 405.87Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M360.31 394.43L329.46 356.04C331.42 354.47 333.34 352.85 335.23 351.2L367.71 388.21C365.29 390.33 362.82 392.41 360.31 394.43Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M374.84 381.68L340.78 346.11C342.59 344.37 344.37 342.6 346.11 340.78L381.68 374.84C379.45 377.17 377.17 379.45 374.84 381.68Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M388.21 367.71L351.2 335.23C352.86 333.34 354.47 331.42 356.04 329.46L394.43 360.31C392.41 362.82 390.33 365.29 388.21 367.71Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M400.32 352.64L360.63 323.49C362.11 321.47 363.56 319.41 364.95 317.33L405.87 344.73C404.08 347.4 402.23 350.04 400.32 352.64Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M411.08 336.57L369 310.99C370.3 308.85 371.56 306.68 372.76 304.48L415.91 328.2C414.36 331.03 412.75 333.82 411.08 336.57Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M420.39 319.63L376.24 297.82C377.35 295.58 378.41 293.31 379.42 291.02L424.48 310.88C423.18 313.83 421.82 316.75 420.39 319.63Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M428.19 301.94L382.3 284.08C383.21 281.75 384.06 279.4 384.87 277.03L431.5 292.86C430.45 295.91 429.35 298.94 428.19 301.94Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M434.4 283.63L387.12 269.87C387.82 267.47 388.46 265.06 389.06 262.62L436.9 274.29C436.13 277.43 435.3 280.55 434.4 283.63Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M438.98 264.85L390.67 255.29C391.15 252.84 391.59 250.37 391.97 247.89L440.65 255.32C440.16 258.52 439.6 261.69 438.98 264.85Z"
                                fill="none" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M441.9 245.73L392.94 240.43C393.21 237.95 393.43 235.45 393.59 232.93L442.73 236.11C442.52 239.33 442.24 242.54 441.9 245.73Z"
                                fill="none" />
                        </svg>

                        <p class="students__employment-value"></p>

                    </div>

                    <p class="students__employment-subtitle">QS WUR</p>

                </div>
                <div class="students__item students__teaching-load ">
                    <p class="students__title">Нагрузка преподавателей</p>

                    <div class="students__teaching-load-plan">
                        <span
                            class="students__teaching-load-title students__teaching-load-title_plan">Плановая:</span>
                        <span class="students__teaching-load-hours">
                            <span class="spanstudents__teaching-load-value"></span>
                            <br>
                            <span>часов</span>
                        </span>
                    </div>

                    <div class="students__teaching-load-progressbar">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="students__teaching-load-fact">
                        <p class="students__teaching-load-ratio"></p>
                        <p class="students__teaching-load-title">Фактическая</p>
                    </div>

                </div>

                <div class="students__item students__diagram">

                    <div class="students__diagram-data"> </div>

                    <div class="students__diagram-info">
                        <svg class="block-bg" viewBox="0 0 65 75" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_2008:318)">
                                <path d="M55 55.4259V1H6.25365L1 7.5955V64H48.1703L55 55.4259Z"
                                    fill="#112054" />
                                <path
                                    d="M55.5 55.4259V55.6007L55.3911 55.7374L48.5614 64.3115L48.4112 64.5H48.1703H1H0.5V64V7.5955V7.4207L0.60891 7.28397L5.86256 0.688476L6.01268 0.5H6.25365H55H55.5V1V55.4259Z"
                                    stroke="#217AFF" />
                            </g>
                            <defs>
                                <filter id="filter0_d_2008:318" x="0" y="0" width="65" height="75"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha" />
                                    <feOffset dx="5" dy="6" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feColorMatrix type="matrix"
                                        values="0 0 0 0 0.0897222 0 0 0 0 0.241933 0 0 0 0 0.633333 0 0 0 0.12 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                        result="effect1_dropShadow_2008:318" />
                                    <feBlend mode="normal" in="SourceGraphic"
                                        in2="effect1_dropShadow_2008:318" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                        <div class="students__diagram-month-text"></div>

                        <div class="students__diagram-info__wrap">
                            <div class="students__diagram-info__item">
                                <svg class="students__diagram-info__icon" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="8" width="7" height="7" transform="rotate(-45 3 8)"
                                        stroke="#217AFF" stroke-width="3" />
                                </svg>
                                <div
                                    class="students__diagram-info__value students__diagram-info__value_bachelors">
                                </div>
                            </div>
                            <div class="students__diagram-info__item">
                                <svg class="students__diagram-info__icon" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="8" width="7" height="7" transform="rotate(-45 3 8)"
                                        stroke="#D1CB33" stroke-width="3" />
                                </svg>
                                <div
                                    class="students__diagram-info__value students__diagram-info__value_specialists">
                                </div>
                            </div>
                            <div class="students__diagram-info__item">
                                <svg class="students__diagram-info__icon" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="8" width="7" height="7" transform="rotate(-45 3 8)"
                                        stroke="#FB9B2B" stroke-width="3" />
                                </svg>
                                <div
                                    class="students__diagram-info__value students__diagram-info__value_magisters">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="students__diagram-legend">
                        <div class="students__diagram-legend-item">
                            <div class="students__diagram-legend-wrap">
                                <svg class="students__diagram-legend-icon" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="8" width="7" height="7" transform="rotate(-45 3 8)"
                                        stroke="#217AFF" stroke-width="3" />
                                </svg>
                                <span>Бакалавры</span>
                            </div>
                        </div>

                        <div class="students__diagram-legend-item">
                            <div class="students__diagram-legend-wrap">
                                <svg class="students__diagram-legend-icon" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="8" width="7" height="7" transform="rotate(-45 3 8)"
                                        stroke="#D1CB33" stroke-width="3" />
                                </svg>
                                <span>Специалисты</span>
                            </div>
                        </div>

                        <div class="students__diagram-legend-item">
                            <div class="students__diagram-legend-wrap">
                                <svg class="students__diagram-legend-icon" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="8" width="7" height="7" transform="rotate(-45 3 8)"
                                        stroke="#FB9B2B" stroke-width="3" />
                                </svg>
                                <span>Магистры</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="students__item students__graphic-container">
                    <div class="students__graphic-item">
                        <div class="students__graphic-info">
                            <div class="students__graphic-descr">Очное</div>

                            <div class="students__graphic-value">31 064</div>
                        </div>


                        <svg class="students__graphic" width="100%" overflow="visible" viewBox="0 0 120 3"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <svg class="students__graphic-data staff__graphic-data_management-staff"
                                width="100%" x="0" y="0">
                                <rect class="students__graphic-row" width="100%" fill="#217AFF" x="3"
                                    y="0.75" />
                                <rect class="students__graphic-right-rect students__graphic-right-rect_blue"
                                    x="100%" y="0" fill="white" />
                            </svg>
                        </svg>
                    </div>
                    <div class="students__graphic-item">
                        <div class="students__graphic-info">
                            <div class="students__graphic-descr">Очно-заочное</div>

                            <div class="students__graphic-value">5 634</div>
                        </div>

                        <svg class="students__graphic" width="100%" overflow="visible" viewBox="0 0 120 3"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <svg class="students__graphic-data staff__graphic-data_management-staff"
                                width="100%" x="0" y="0">
                                <rect class="students__graphic-row" width="100%" fill="#217AFF" x="3"
                                    y="0.75" />
                                <rect class="students__graphic-right-rect students__graphic-right-rect_blue"
                                    x="100%" y="0" fill="white" />
                            </svg>
                        </svg>
                    </div>
                    <div class="students__graphic-item">
                        <div class="students__graphic-info">
                            <div class="students__graphic-descr">Заочное</div>

                            <div class="students__graphic-value">7 061</div>
                        </div>

                        <svg class="students__graphic" width="100%" overflow="visible" viewBox="0 0 120 3"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <svg class="students__graphic-data staff__graphic-data_management-staff"
                                width="100%" x="0" y="0">
                                <rect class="students__graphic-row" width="100%" fill="#217AFF" x="3"
                                    y="0.75" />
                                <rect class="students__graphic-right-rect students__graphic-right-rect_blue"
                                    x="100%" y="0" fill="white" />
                            </svg>
                        </svg>
                    </div>


                    <div class="students__graphic-item students__graphic-item_budget">
                        <div class="students__graphic-info">
                            <div class="students__graphic-descr">Бюджет</div>

                            <div class="students__graphic-value">9 831</div>
                        </div>

                        <svg class="students__graphic" width="100%" overflow="visible" viewBox="0 0 120 3"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <svg class="students__graphic-data staff__graphic-data_management-staff"
                                width="100%" x="0" y="0">
                                <rect class="students__graphic-row" width="100%" fill="#217AFF" x="3"
                                    y="0.75" />
                                <rect class="students__graphic-right-rect students__graphic-right-rect_blue"
                                    x="100%" y="0" fill="white" />
                            </svg>
                        </svg>
                    </div>

                    <div class="students__graphic-item">
                        <div class="students__graphic-info">
                            <div class="students__graphic-descr">Внебюджет</div>

                            <div class="students__graphic-value">33 928</div>
                        </div>

                        <svg class="students__graphic" width="100%" overflow="visible" viewBox="0 0 120 3"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <svg class="students__graphic-data staff__graphic-data_management-staff"
                                width="100%" x="0" y="0">
                                <rect class="students__graphic-row" width="100%" fill="#217AFF" x="3"
                                    y="0.75" />
                                <rect class="students__graphic-right-rect students__graphic-right-rect_blue"
                                    x="100%" y="0" fill="white" />
                            </svg>
                        </svg>
                    </div>
                </div>

                <div class="calendar calendar_students">
                    <div class="calendar__month">
                        <div class="calendar__month-value calendar__month-progress-bar__students-value">
                        </div>
                        <div class="calendar__month-progress-bar">
                            <svg class="calendar__month-progress-bar__students" width="100%" height="100%"
                                viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 0H15.5L4.5 12H0.5L11.5 0Z" fill="#FB9B2B" />
                                <path d="M17.5 0H21.5L10.5 12H6.5L17.5 0Z" fill="#FB9B2B" />
                                <path d="M23.5 0H27.5L16.5 12H12.5L23.5 0Z" fill="#FB9B2B" />
                                <path d="M29.5 0H33.5L22.5 12H18.5L29.5 0Z" fill="#FB9B2B" />
                                <path d="M35.5 0H39.5L28.5 12H24.5L35.5 0Z" fill="#FB9B2B" />
                                <path d="M41.5 0H45.5L34.5 12H30.5L41.5 0Z" fill="#FB9B2B" />
                                <path d="M47.5 0H51.5L40.5 12H36.5L47.5 0Z" fill="#FB9B2B" />
                                <path d="M53.5 0H57.5L46.5 12H42.5L53.5 0Z" fill="#FB9B2B" />
                                <path d="M59.5 0H63.5L52.5 12H48.5L59.5 0Z" fill="#FB9B2B" />
                                <path d="M65.5 0H69.5L58.5 12H54.5L65.5 0Z" fill="#FB9B2B" />
                                <path d="M71.5 0H75.5L64.5 12H60.5L71.5 0Z" fill="#FB9B2B" />
                                <path d="M77.5 0H81.5L70.5 12H66.5L77.5 0Z" fill="#FB9B2B" />
                                <path d="M83.5 0H87.5L76.5 12H72.5L83.5 0Z" fill="#FB9B2B" />
                                <path d="M89.5 0H93.5L82.5 12H78.5L89.5 0Z" fill="#FB9B2B" />
                                <path d="M95.5 0H99.5L88.5 12H84.5L95.5 0Z" fill="#FB9B2B" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `

        }
   
    }

customElements.define('students-block', StudentsBlock)