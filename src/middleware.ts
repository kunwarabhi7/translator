export { default } from "next-auth/middleware";
// export default withAuth();

// export const config = {
//   matcher: ["/chat", "/chat/:id*", "/register"],
// };
export const config = { matcher: ["/chat/", "/chat/:id*", "/register"] };
