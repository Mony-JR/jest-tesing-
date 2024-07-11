// // src/services/userService.test.ts

// import { UserModel } from "../Models/user"; // Import your UserModel interface
// import { UserRepo } from "./user.repo";

// // Mocking UserModel
// jest.mock("../Models/user", () => ({
//     UserModel: {
//         findById: jest.fn(),
//         find: jest.fn(),
//         create: jest.fn(),
//         findByIdAndUpdate: jest.fn(),
//         findByIdAndDelete: jest.fn(),
//     }
// }));

// // Example tests
// describe("UserRepo", () => {
//     let userService: UserRepo;

//     beforeEach(() => {
//         userService = new UserRepo();
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     describe("getUserById", () => {
//         it("should return a user when given a valid ID", async () => {
//             const mockUser = { _id: "validId", name: "Test User", age: 25 };
//             UserModel.findById.mockResolvedValue(mockUser);

//             const result = await userService.getUserById("validId");
//             expect(result).toEqual(mockUser);
//         });

//         it("should return null when given an invalid ID", async () => {
//             UserModel.findById.mockResolvedValue(null);

//             const result = await userService.getUserById("invalidId");
//             expect(result).toBeNull();
//         });
//     });

//     describe("getUsers", () => {
//         // Write tests for getUsers method
//     });

//     describe("createUser", () => {
//         // Write tests for createUser method
//     });

//     describe("updateUser", () => {
//         // Write tests for updateUser method
//     });

//     describe("deleteUser", () => {
//         // Write tests for deleteUser method
//     });
// });
