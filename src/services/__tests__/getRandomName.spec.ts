import getRandomName from "../getRandomName";

describe("getRandomName service test", () => {
  const fetchMock = jest
    .fn()
    .mockName("fetch")
    .mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve([{ name: "Sapana" }, { name: "Hayal" }, { name: "Clara" }])
      })
    );
  beforeEach(() => {
    globalThis.fetch = fetchMock;
  });

  afterEach(async () => {
    fetchMock.mockRestore();
  });

  it("tests", async () => {
    const names = await getRandomName();
    expect(names).toEqual(["Sapana", "Hayal", "Clara"]);
  });
});
