const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div>Happy Clients</div>
          </div>
          <div className="animate-fade-in delay-100">
            <div className="text-4xl font-bold mb-2">90+</div>
            <div>Ready Projects</div>
          </div>
          <div className="animate-fade-in delay-200">
            <div className="text-4xl font-bold mb-2">200+</div>
            <div>Completed Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;