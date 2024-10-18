function App() {
  return (
    <>
      <div className="h-screen flex flex-col-reverse lg:flex-row ">
        <div className="lg:w-300">Sidebar</div>
        <div className="grow overflow-y-auto">
          <div className="max-w-1140 mx-auto">Content</div>
        </div>
      </div>
    </>
  );
}

export default App;
