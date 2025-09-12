import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/100" className="wd-dashboard-course-link">
            <Image src="/images/hollowKnight.jpg" width={200} height={150} alt="Hollow Knight image"/>
            <div>
              <h5> HK100</h5>
              <p className="wd-dashboard-course-title">
                Introduction to Hollow Knight{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/200" className="wd-dashboard-course-link">
            <Image src="/images/silkSong.jpg" width={200} height={150} alt="Silksong image"/>
            <div>
              <h5> HK200</h5>
              <p className="wd-dashboard-course-title">
                Foundations of Silksong{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/300" className="wd-dashboard-course-link">
            <Image src="/images/clairObscur.jpg" width={200} height={150} alt="Clair Obscur image"/>
            <div>
              <h5> CO300</h5>
              <p className="wd-dashboard-course-title">
                Introduction to Clair Obscur{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/400" className="wd-dashboard-course-link">
            <Image src="/images/marioGalaxy.jpg" width={200} height={150} alt="Mario Galaxy image"/>
            <div>
              <h5> MG400</h5>
              <p className="wd-dashboard-course-title">
                Mario Galaxy Fundementals{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/500" className="wd-dashboard-course-link">
            <Image src="/images/balatro.jpg" width={200} height={150} alt="Balatro image"/>
            <div>
              <h5> BA500</h5>
              <p className="wd-dashboard-course-title">
                Introduction to Balatro{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/600" className="wd-dashboard-course-link">
            <Image src="/images/stardewValley.jpg" width={200} height={150} alt="Stardew Valley image"/>
            <div>
              <h5> SV600</h5>
              <p className="wd-dashboard-course-title">
                Advanced Stardew Valley{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
          <Link href="/Courses/700" className="wd-dashboard-course-link">
            <Image src="/images/terraria.jpg" width={200} height={150} alt="Stardew Valley image"/>
            <div>
              <h5> TE700</h5>
              <p className="wd-dashboard-course-title">
                Advanced Terraria{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>

        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>
      </div>
    </div>
);}
