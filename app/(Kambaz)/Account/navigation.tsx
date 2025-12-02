"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const pathname = usePathname();
  
  return (
    <Nav variant="pills" className="flex-column">
      <NavLink as={Link} href="/Account/Signin" active={pathname.endsWith('Signin')}>
        Signin
      </NavLink>
      <NavLink as={Link} href="/Account/Signup" active={pathname.endsWith('Signup')}>
        Signup
      </NavLink>
      <NavLink as={Link} href="/Account/Profile" active={pathname.endsWith('Profile')}>
        Profile
      </NavLink>
      {currentUser && currentUser.role === "ADMIN" && (
        <NavLink as={Link} href="/Account/Users" active={pathname.endsWith('Users')}>
          Users
        </NavLink>
      )}
    </Nav>
  );
}