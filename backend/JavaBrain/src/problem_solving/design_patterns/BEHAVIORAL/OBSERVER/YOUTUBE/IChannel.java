package problem_solving.design_patterns.BEHAVIORAL.OBSERVER.YOUTUBE;

public interface IChannel {
    void subscribe(Subscriber subscriber);

    void unsubscribe(Subscriber subscriber);

    void notifySubscribers();

    void uploadVideo(String title);
}
