import { Route, Routes } from "react-router-dom";
import { ReactNode, lazy } from "react";
import SuspenseElement from "../components/SuspenseElement";
import PrivateRoute from "@/components/PrivateRoute";

const Home = lazy(() => import("@/pages/Index"));
const AboutUs = lazy(() => import("@/pages/aboutus/Index"));
const Services = lazy(() => import("@/pages/services/Index"));
const ContactUs = lazy(() => import("@/pages/contactus/Index"));
const LoginPage = lazy(() => import("@/pages/login/Index"));
const HomeAdmin = lazy(() => import("@/pages/admin/Index"));
const ClassnameAdmin = lazy(() => import("@/pages/admin/classname/Index"));
const StudentClassAdmin = lazy(
  () => import("@/pages/admin/classname/StudentClass")
);
const LessonAdmin = lazy(() => import("@/pages/admin/lesson/Index"));
const TeacherDataPage = lazy(
  () => import("@/pages/admin/lesson/teacher-data/Index")
);
const EmployeeAdmin = lazy(() => import("@/pages/admin/employee/Index"));
const HomeWaliKelas = lazy(() => import("@/pages/wali-kelas/Index"));
const GradeIncrementsPage = lazy(
  () => import("@/pages/wali-kelas/grade-increment/Index")
);
const StudentAndParentPage = lazy(
  () => import("@/pages/wali-kelas/parent/Index")
);
const StudentPerformance = lazy(
  () => import("@/pages/wali-kelas/student-performance/Index")
);
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const HomeGuruMapel = lazy(() => import("@/pages/guru-mapel/Index"));
const PresensiPage = lazy(() => import("@/pages/guru-mapel/presensi/Index"));
const PresenceHistoryPage = lazy(
  () => import("@/pages/guru-mapel/presensi/History")
);
const AssessmentHistoryPage = lazy(
  () => import("@/pages/guru-mapel/assessment/History")
);
const AssessmentPage = lazy(
  () => import("@/pages/guru-mapel/assessment/Index")
);

type TArrRoutes = {
  path: string;
  element: ReactNode;
  suspense: true;
};

const routes = [
  { path: "/admin", element: <HomeAdmin />, suspense: true },
  { path: "/admin/data-pegawai", element: <EmployeeAdmin />, suspense: true },
  { path: "/admin/data-kelas", element: <ClassnameAdmin />, suspense: true },
  {
    path: "/admin/data-kelas/:classname",
    element: <StudentClassAdmin />,
    suspense: true,
  },
  {
    path: "/admin/mata-pelajaran",
    element: <LessonAdmin />,
    suspense: true,
  },
  {
    path: "/admin/mata-pelajaran/pengajar/:lesson",
    element: <TeacherDataPage />,
    suspense: true,
  },
  { path: "/wali-kelas", element: <HomeWaliKelas />, suspense: true },
  {
    path: "/wali-kelas/kenaikan-kelas",
    element: <GradeIncrementsPage />,
    suspense: true,
  },
  {
    path: "/wali-kelas/murid-dan-orang-tua",
    element: <StudentAndParentPage />,
    suspense: true,
  },
  {
    path: "/wali-kelas/kinerja-murid/:classname",
    element: <StudentPerformance />,
    suspense: true,
  },
  {
    path: "/guru-mapel",
    element: <HomeGuruMapel />,
    suspense: true,
  },
  {
    path: "/guru-mapel/presensi/:classname/:lesson",
    element: <PresensiPage />,
    suspense: true,
  },
  {
    path: "/guru-mapel/presensi/:classname/:lesson/riwayat",
    element: <PresenceHistoryPage />,
    suspense: true,
  },
  {
    path: "/guru-mapel/penilaian/:classname/:lesson",
    element: <AssessmentPage />,
    suspense: true,
  },
  {
    path: "/guru-mapel/penilaian/:classname/:lesson/riwayat",
    element: <AssessmentHistoryPage />,
    suspense: true,
  },
  {
    path: "/profil",
    element: <ProfilePage />,
    suspense: true,
  },
];

const globalRoutes: TArrRoutes[] = [
  { path: "/", element: <Home />, suspense: true },
  { path: "/tentang-kami", element: <AboutUs />, suspense: true },
  { path: "/layanan", element: <Services />, suspense: true },
  { path: "/hubungi-kami", element: <ContactUs />, suspense: true },
  { path: "/masuk", element: <LoginPage />, suspense: true },
];

const RoutesConfig = () => {
  return (
    <Routes>
      {globalRoutes.map((global) => (
        <Route
          path={global.path}
          element={
            global.suspense ? (
              <SuspenseElement>{global.element}</SuspenseElement>
            ) : null
          }
          key={global.path}
        />
      ))}

      <Route path="/" element={<PrivateRoute />}>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={
              route.suspense ? (
                <SuspenseElement>{route.element}</SuspenseElement>
              ) : null
            }
            key={route.path}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
