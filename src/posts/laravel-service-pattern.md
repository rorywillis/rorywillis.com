The service pattern is a great way to abstract *certain* logic into a highly reusable class. Let's go over a scenario where using the service pattern might come in handy.

#### A scenario *without* using the service pattern?

Let's say you have an application that processes orders for a car dealership. You might generate reports for the following:

- How many cars were sold
- How many cars were sold by each salesperson
- How many cars were sold for each model

And then to go a step further, you might want to expose an API to the manufacturer that allows them to fetch these same reports for each model.

If we weren't thinking too much, we would probably create a controller which renders a reporting dashboard view. Then we might setup an event class to send weekly report emails. Then we would create an API controller which returns most of the same data as JSON for the manufacturer only.

That's already three separate places where logic could be duplicated! If we didn't know any better, this level of duplication would probably work for a period of time, but what happens when you need to add or remove a database column that affects your reporting? You guessed it... You have to change every place you inserted the reporting logic, and that's not very sustainable.

#### Using the service pattern

The scenario above is where the service pattern really shines. Instead of duplicating logic, we can do the following:

1. Create a new folder in the /app directory and call it "Services". 
2. Create a class file in the new directory and call it ReportService.php
3. Now all we need to do is create methods in the class that have a very small scope. These methods can be used to build up other parts of your application, like both of the controllers and events described above.

Here's an example of what the ReportService class might look like:

```
<?php
namespace App\Services;

class ReportService {

    public function soldByTime($start, $end)
    {
        ....logic here...
    }

    public function soldByVendor($vendorId)
    {
        ...logic here...
    }

    // ... more methods... on and on ...

}
```

Now in our controllers and events, you can use the service like so:

```
<?php
namespace App\Controllers\Http\Api;

class ReportController {

    protected $reportService;

    public function __construct(ReportService $reportService) 
    {
        $this->reportService = $reportService;
    }

    public function index()
    {
        $data = $this->reportService->soldByVendor();
        //...return some view
    }

}
```

