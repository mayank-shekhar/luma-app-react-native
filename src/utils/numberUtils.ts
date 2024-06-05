/**
 * Generates a random integer between the specified minimum and maximum values.
 * The minimum value is inclusive, while the maximum value is exclusive.
 *
 * @param min - The minimum value of the range (inclusive).
 * @param max - The maximum value of the range (exclusive).
 * @returns A random integer between the minimum and maximum values.
 */
export function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

// const identity = {
//   identityMap: {
//     Email: [
//       {
//         id: 'testUser+20240603-17@gmail.com',
//         authenticatedState: 'authenticated',
//         primary: false,
//       },
//       {
//         id: 'testUser+20240603-43@gmail.com',
//         authenticatedState: 'authenticated',
//         primary: false,
//       },
//       {
//         id: 'testUser@gmail.com',
//         authenticatedState: 'authenticated',
//         primary: false,
//       },
//       {
//         id: 'testUser+20240604-25@gmail.com',
//         authenticatedState: 'authenticated',
//         primary: false,
//       },
//       {
//         id: 'testUser+20240605-88@gmail.com',
//         authenticatedState: 'authenticated',
//         primary: false,
//       },
//       {
//         id: 'testUser+20240605-54@gmail.com',
//         authenticatedState: 'authenticated',
//         primary: false,
//       },
//       {
//         id: 'testUser+20240605-45@gmail.com',
//         authenticatedState: 'authenticated',
//         primary: false,
//       },
//     ],
//     lumaCRMId: [
//       {
//         id: '76686662cdd84e77a68b3fe5860a2b04',
//         authenticatedState: 'authenticated',
//         primary: true,
//       },
//       {
//         id: '892cb3f882874e2095d6ac63ffd99fd6',
//         authenticatedState: 'authenticated',
//         primary: true,
//       },
//       {
//         id: '112ca06ed53d3db37e4cea49cc45b71e',
//         authenticatedState: 'authenticated',
//         primary: true,
//       },
//       {
//         id: '940a42c256644122b78573c263860b57',
//         authenticatedState: 'authenticated',
//         primary: true,
//       },
//       {
//         id: '78e63e708c9c4df4aaaf9cd31e5be286',
//         authenticatedState: 'authenticated',
//         primary: true,
//       },
//       {
//         id: '565f096db3b945c4b68c9a583dc7afdf',
//         authenticatedState: 'authenticated',
//         primary: true,
//       },
//       {
//         id: '062404eb676448f2bd352fc0f6869308',
//         authenticatedState: 'authenticated',
//         primary: true,
//       },
//     ],
//     ECID: [
//       {
//         id: '27357278135305332455304187193508009491',
//         authenticatedState: 'ambiguous',
//         primary: false,
//       },
//     ],
//   },
// };
